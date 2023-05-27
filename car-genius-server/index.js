const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();

// middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Gari ke Daktar Dekhao");
});

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.spr5boq.mongodb.net/?retryWrites=true&w=majority`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const verifyJWT = (req, res, next) => {
  console.log("hitting verify JWT");
  console.log(req.headers.authorization);
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res
      .status(401)
      .send({ error: true, message: "unauthorized access" });
  }
  const token = req.headers.authorization.split(" ")[1];
  // verify a token symmetric
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, decoded) => {
    if(error) {
        return res.status(403).send({error: true, message: 'unauthorized access'})
    }
    req.decoded = decoded;
    next()

  });
};

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const servicesCollection = client
      .db("carDoctorDatabase")
      .collection("services");
    const bookingsCollection = client
      .db("carDoctorDatabase")
      .collection("bookings");

    app.post("/jwt", (req, res) => {
      const user = req.body;
      console.log(user);
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "4h",
      });
      console.log(token);
      res.send({ token });
    });

    app.get("/services", async (req, res) => {
      const cursor = servicesCollection.find();

      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/services/:id", async (req, res) => {
      try {
        const id = req.params.id;

        const query = { _id: new ObjectId(id) };

        const options = {
          projection: { title: 1, price: 1, services_id: 1, img: 1 },
        };

        const services = await servicesCollection.findOne(query, options);

        res.send(services);
      } catch (err) {
        res.send(err);
      }
    });

    // bookings
    app.get("/bookings", verifyJWT, async (req, res) => {
      try {

        if(decoded.email !== req.query.email) {
          return res.status(403).send({error: 1, message: 'forbidden access'})
        }

        let query = {};
        if (req.query?.email) {
          query = { customerEmail: req.query.email };
        }

        const bookings = await bookingsCollection.find(query).toArray();

        res.send(bookings);
      } catch (err) {
        res.send(err);
      }
    });

    app.post("/bookings", async (req, res) => {
      try {
        const booking = req.body;
        const result = await bookingsCollection.insertOne(booking);
        res.send(result);
      } catch (err) {
        res.send(err);
      }
    });

    app.patch("/bookings/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const filter = { _id: new ObjectId(id) };

        const updateBooking = req.body;
        console.log(updateBooking);
        const updateDoc = {
          $set: {
            status: updateBooking.status,
          },
        };
        const result = await bookingsCollection.updateOne(filter, updateDoc);
        res.send(result);
      } catch (err) {
        res.send(err);
      }
    });

    app.delete("/bookings/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };

        const result = await bookingsCollection.deleteOne(query);
        res.send(result);
      } catch (err) {
        res.send(err);
      }
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log("Listening to PORT: " + port);
});

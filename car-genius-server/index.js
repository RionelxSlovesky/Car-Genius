const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000
require('dotenv').config()

// middlewares
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Gari ke Daktar Dekhao')
})


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.spr5boq.mongodb.net/?retryWrites=true&w=majority`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        const servicesCollection = client.db('carDoctorDatabase').collection('services')
        const bookingsCollection = client.db('carDoctorDatabase').collection('bookings')

        app.get('/services', async (req, res) => {
            const cursor = servicesCollection.find();

            const result = await cursor.toArray()
            res.send(result)
        })

        app.get('/services/:id', async (req, res) => {
            try {
                const id = req.params.id

                const query = { _id: new ObjectId(id) };

                const options = {
                    projection: { title: 1, price: 1, services_id: 1 }
                }

                const services = await servicesCollection.findOne(query, options);

                res.send(services)
            }
            catch (err) {
                res.send(err)
            }

        })

        // bookings
        app.get('/bookings', async (req, res) => {
            try {

                let query = {}
                if(req.query?.email){
                    query = {customerEmail: req.query.email}
                }

                const bookings = await bookingsCollection.find(query).toArray();

                res.send(bookings)
            }
            catch (err) {
                res.send(err)
            }
        })

        app.post('/bookings', async (req, res) => {
            try {
                const booking = req.body;
                const result = await bookingsCollection.insertOne(booking);
                res.send(result)
            }
            catch (err) {
                res.send(err)
            }
        })



        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.listen(port, () => {
    console.log('Listening to PORT: ' + port)
})
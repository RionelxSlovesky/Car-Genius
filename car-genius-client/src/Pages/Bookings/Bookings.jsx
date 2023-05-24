import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow/BookingRow";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const handleDelete = (id, service) => {
    const proceed = confirm("Are you sure you want to delete?");
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert(`${service} deleted successfully`);
            const remaining = bookings.filter(booking => booking._id !== id)
            setBookings(remaining)
          }
        });
    }
  };


  const handleBookingConfirm = id => {
    fetch(`http://localhost:5000/bookings/${id}`,{
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({status: 'confirm'})
    })
    .then(res=>res.json())
    .then(data => {
      console.log(data)
      if(data.modifiedCount > 0) {
        const remaining = bookings.filter(booking => booking._id !==id);
        const updated = bookings.find(booking => booking._id === id)
        updated.status = 'confirm'
        const newBookings = [updated, ...remaining]
        setBookings(newBookings);
      }
    })
  }

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Cancel</th>
            <th>Customer Details</th>
            <th>Service</th>
            <th>Price</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* rows */}
          {bookings.map((booking) => (
            <BookingRow key={booking._id} booking={booking} handleDelete={handleDelete} handleBookingConfirm={handleBookingConfirm}></BookingRow>
          ))}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th>Cancel</th>
            <th>Customer Details</th>
            <th>Service</th>
            <th>Price</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Bookings;

import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const CheckOut = () => {

    const service = useLoaderData();
    const { _id, title, price } = service;
    const {user} = useContext(AuthContext)

    const handleBooking = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const session = form.session.value;

        const order = {
            customerName: name,
            customerEmail: email,
            date: date,
            session: session,
            service: _id,
            price: price
        }

        console.log(order)
    }

    return (
        <div>
            <div className="card-body">
                <h2 className="text-3xl text-red-500 font-bold text-center my-8">Book Service: {title}</h2>
                <form onSubmit={handleBooking}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" defaultValue={user?.displayName} name="name" placeholder="name" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" defaultValue={user?.email} name="email" placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Session</span>
                            </label>
                            <select name="session" defaultValue='morning' className="select select-bordered w-full">
                                <option value='morning'>Morning</option>
                                <option value='noon'>Noon</option>
                                <option value='evening'>Evening</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-error text-white" type="submit" value="Order Confirm" />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default CheckOut;
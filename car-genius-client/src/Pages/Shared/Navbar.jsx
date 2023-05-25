import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {

    const { user, loading, logout } = useContext(AuthContext)

    const handleLogOut = event => {
        event.preventDefault();
        logout()
        .then(() => {
            localStorage.removeItem('car-access-token')
            alert('Logged Out Successfully')
        })
        .catch(err => console.log(err.message))
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to='/'>Home</Link>
                        {
                            loading || user && <Link to='/bookings'>Bookings</Link>
                        }
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <Link className="btn btn-ghost normal-case text-xl"><img src={logo} className="w-16 p-2" alt="" /></Link>
            </div>
            <div className="navbar-end">
                
                    <div className="indicator">
                        {
                            loading ? <></> : user ? <button className="btn btn-warning text-xs" onClick={handleLogOut}>Log Out</button> : <Link className="btn btn-warning text-xs" to='/login'><button className="uppercase">Log In</button></Link>
                        }
                        
                    </div>
                
            </div>
        </div>
    );
};

export default Navbar;
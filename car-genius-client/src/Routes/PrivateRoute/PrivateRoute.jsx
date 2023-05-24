import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const {loading, user} = useContext(AuthContext)
    const location = useLocation()

    if(loading) {
        return <h1>Loading</h1>
    }else {
        if(user?.email) {
            return children
        } else {
            return <Navigate to='/login' state={ {from: location} } replace></Navigate>
        }
    }

    
};

export default PrivateRoute;
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const {loading, user} = useContext(AuthContext)

    if(loading) {
        return <h1>Loading</h1>
    }else {
        if(user?.email) {
            return children
        } else {
            return <Navigate to='/login' replace></Navigate>
        }
    }

    
};

export default PrivateRoute;
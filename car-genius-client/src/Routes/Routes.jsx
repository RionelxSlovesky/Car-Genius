
import {
    createBrowserRouter
} from 'react-router-dom'
import Main from '../Layout/Main'
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login'
import Registration from '../Pages/Registration/Registration'
import CheckOut from '../Pages/CheckOut/CheckOut'
import Bookings from '../Pages/Bookings/Bookings'
import PrivateRoute from './PrivateRoute/PrivateRoute'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Registration></Registration>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({params}) => fetch(`https://car-genius-server-orcin.vercel.app/services/${params.id}`)
            },
            {
                path: '/bookings',
                element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
            }
        ]
    }
])

export default router
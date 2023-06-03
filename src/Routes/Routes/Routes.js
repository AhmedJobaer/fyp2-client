import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Book from "../../Pages/Categories/Book/Book";
import Tools from "../../Pages/Categories/Tools/Tools";
import Health from "../../Pages/Categories/Health/Health";
import Register from "../../Pages/Register/Register";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../../Layout/DashboardLayout";
import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment";
import CardDetails from "../../Pages/Categories/Book/CardDetails";
import Lent from "../../Pages/Dashboard/LentItem/Lent";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import SharedProduct from "../../Pages/Dashboard/SharedProduct/SharedProduct";
import RequestProduct from "../../Pages/Dashboard/RequestedProduct/RequestProduct";
import ReviewProduct from "../../Pages/Dashboard/ReviewProduct/ReviewProduct";
import AskProduct from "../../Pages/Dashboard/AskProduct/AskProduct";

export const router = createBrowserRouter([
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
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/categories-book/:itemType',
                loader: ({ params }) => fetch(`http://localhost:5000/api/type/${params.itemType}`),
                element: <Book></Book>
            },

            //http://localhost:5000/api/item/filter?itemType=book&availability=true
            {
                path: '/categories-tools',
                element: <Tools></Tools>
            },
            {
                path: '/categories-health',
                element: <Health></Health>
            },
            {
                path: '/card-details/:_id',
                loader: ({ params }) => fetch(`http://localhost:5000/api/items/${params._id}`),
                element: <CardDetails></CardDetails>
            },

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
                children: [
                    {
                        path: '/dashboard/lent',
                        element: <Lent></Lent>
                    },
                    {
                        path: '/dashboard/addProduct',
                        element: <AddProduct></AddProduct>
                    },
                    {
                        path: '/dashboard/askProduct',
                        element: <AskProduct></AskProduct>
                    },
                    {
                        path: '/dashboard/sharedProduct',
                        element: <SharedProduct></SharedProduct>
                    },
                    {
                        path: '/dashboard/requestedProduct',
                        element: <RequestProduct></RequestProduct>
                    },
                    {
                        path: '/dashboard/reviewProduct',
                        element: <ReviewProduct></ReviewProduct>
                    },
                ]
            },



        ]
    }
])
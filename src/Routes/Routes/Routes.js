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
                path: '/categories-book',
                element: <Book></Book>
            },
            {
                path: '/categories-tools',
                element: <Tools></Tools>
            },
            {
                path: '/categories-health',
                element: <Health></Health>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    }
])
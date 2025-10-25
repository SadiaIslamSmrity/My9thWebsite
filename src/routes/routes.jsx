import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout";
import Home from "../Components/Home";
import Signup from "../Components/Signup";
import Signin from "../Components/Signin";
import Store from "../Components/Store";
import Forget from "../Components/Forget";
import Details from "../Components/Details";
import Error from "../Components/Error";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        errorElement: <Error />,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/signup',
                Component: Signup
            },
            {
                path: '/signin',
                Component: Signin
            },
            {
                path: '/store',
                Component: Store
            },
            {
                path: '/forget',
                Component: Forget
            },
            {
                path: '/details/:toyId',
                Component: Details
            }
        ]
    }
])

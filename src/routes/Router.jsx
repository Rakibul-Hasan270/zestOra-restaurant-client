import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import ItemDetails from "../components/ItemDetails/ItemDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/item_details/:id',
                element: <ItemDetails></ItemDetails>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/item/${params.id}`)
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
]);

export default router;
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import Buy from "../pages/Buy/Buy";
import Rent from "../pages/Rent/Rent";
import PropertyDetails from "../pages/PropertyDetails/PropertyDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/buy",
                element: <Buy></Buy>
            },
            {
                path: "/rent",
                element: <Rent></Rent>
            },
            {
                path: "/property-details",
                element: <PropertyDetails></PropertyDetails>

            },
           
        ]
    }
])

export default router;
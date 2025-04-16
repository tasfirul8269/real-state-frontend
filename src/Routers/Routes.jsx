import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <h1 className="text-7xl">Home</h1>
            }
        ]
    }
])

export default router;
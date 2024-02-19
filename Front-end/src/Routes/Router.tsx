import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Common/Layout";
import Homepage from "../Pages/Home/Homepage";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path:"/",
        element: <Homepage />,
      },
    ],
  },
]);

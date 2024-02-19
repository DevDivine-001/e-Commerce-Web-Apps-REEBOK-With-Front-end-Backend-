import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Common/Layout";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [{}],
  },
]);

import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Common/Layout";
import Homepage from "../Pages/Home/Homepage";
import Register from "../auth/Register";
import Login from "../auth/Login";
import Save from "../Pages/Link/Save";
import Addtocart from "../Pages/Link/Addtocart";
import Profile from "../Pages/Link/Profile";
import SeeProducts from "../Pages/Home/SeeProducts";
import ResetPassword from "../auth/ResetPassword";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/register-auth",
        element: <Register />,

        index: true,
      },
      {
        path: "/login-auth",
        element: <Login />,
        index: true,
      },
      {
        path: "/resetpassword-auth",
        element: <ResetPassword />,
        index: true,
      },
      {
        path: "/save",
        element: <Save />,
        index: true,
      },
      {
        path: "/add-to-cart",
        element: <Addtocart />,
        index: true,
      },
      {
        path: "/seeproducts",
        element: <SeeProducts />,
        index: true,
      },
      {
        path: "/profile-screen",
        element: <Profile />,
        index: true,
      },
    ],
  },
]);

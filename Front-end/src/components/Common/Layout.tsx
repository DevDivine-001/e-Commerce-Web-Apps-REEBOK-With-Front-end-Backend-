import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
// import Register from "../../auth/Register";
// import Headertwo from "./Headertwo";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

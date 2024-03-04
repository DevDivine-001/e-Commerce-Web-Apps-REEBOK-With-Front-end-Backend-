import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
// import Register from "../../auth/Register";
// import Headertwo from "./Headertwo";

const Layout = () => {
  return (
    <div>
      <Header />
      {/* <Headertwo/> */}
      <Outlet />
      <Footer />
      {/* <Register/> */}
    </div>
  );
};

export default Layout;

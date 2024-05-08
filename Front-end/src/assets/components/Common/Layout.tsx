import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
// import Register from "../../auth/Register";


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

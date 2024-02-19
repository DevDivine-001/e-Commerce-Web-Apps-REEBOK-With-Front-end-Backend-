import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
        <Headers/>
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Layout;

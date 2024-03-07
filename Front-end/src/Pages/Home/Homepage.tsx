// import { CgDarkMode } from "react-icons/cg";
// import { FaCaretDown } from "react-icons/fa";
// import { FaCartShopping } from "react-icons/fa6";
// import { IoMdSearch } from "react-icons/io";

import Banner from "./Banner";
import Hore from "./Hore";
import Products from "./Products";
import backgroundImage from "../../assets/bg-1.3d2a7a2d0a1ed5a6e5b206301d008f80 (1).svg"

const Homepage = () => {
  const Image:any = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat:"no-repeat",
    backgroundSize: "cover",
    height: "auto",
    width: "100%",

  };

  return (
    <>
      <div style={{ Image}}>
        <Hore />
        <Products />
        <Banner />
      </div>
    </>
  );
};

export default Homepage;

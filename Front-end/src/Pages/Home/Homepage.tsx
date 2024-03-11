// import { CgDarkMode } from "react-icons/cg";
// import { FaCaretDown } from "react-icons/fa";
// import { FaCartShopping } from "react-icons/fa6";
// import { IoMdSearch } from "react-icons/io";

import Banner from "./Banner";
import Hore from "./Hore";
import Products from "./Products";
import Image from "../../assets/bg-1.3d2a7a2d0a1ed5a6e5b206301d008f80.svg";

const Homepage = () => {
  return (
    <div
      className="bg-[#fff]
    "
      style={{
        backgroundImage: `url(${Image})`,
      }}
    >
      <Hore />
      <Products />
      <Banner />
    </div>
  );
};

export default Homepage;

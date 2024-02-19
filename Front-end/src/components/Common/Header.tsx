import { FaShopify } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { MdDarkMode, MdOutlineShoppingCart } from "react-icons/md";
import { TfiSearch } from "react-icons/tfi";
import { VscAccount, VscHeartFilled } from "react-icons/vsc";

const Header = () => {
  return (
    <div className="w-full h-[11vh] justify-center items-center flex top-0 sticky shadow-md z-20">
      <div className="flex justify-between items-center bg-[] w-[93%] h-[7vh]">
        <div className="w-[20%] flex bg-[#000]">
          <FaShopify size={36} className="text-[#FF385C]" />
          <GiShoppingCart
            size={16}
            className="text-[blue] inset-x-0 bottom-0"
          />
        </div>

        <div className="w-[53%] h-[7vh] bg-[] flex justify-between items-center">
          <div className="w-[84%] flex h-[7vh] bg-[#fff] rounded-md border items-center p-1">
            <div className="flex items-center justify-center">
              <TfiSearch size={23} className="text-[silver]" />
            </div>
            <input
              type="text"
              className="p-3 h-[5vh] w-full bg-transparent outline-none"
            />
          </div>

          <div className="flex justify-center items-center">
            <button className="flex justify-center items-center py-[12px] px-[25px] bg-[#FF385C]  text-[#fff] rounded-md max-sm:hidden">
              Sign-In
            </button>
          </div>
        </div>

        <div className=" gap-7 flex justify-between items-center max-sm:gap-2">
          <div className="justify-center items-center flex rounded-[50%] text-[#FF385C] object-cover">
            <VscAccount size={25} />
          </div>
          <div className="justify-center items-center flex rounded-[50%] max-sm:hidden">
            <VscHeartFilled size={25} className="text-[#FF385C]" />
          </div>
          <div className="justify-center items-center flex rounded-[50%] max-sm:flex">
            <MdOutlineShoppingCart size={25} className="text-[#FF385C]" />
          </div>
          <div className="justify-center items-center flex rounded-[50%] max-sm:hidden">
            <MdDarkMode size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

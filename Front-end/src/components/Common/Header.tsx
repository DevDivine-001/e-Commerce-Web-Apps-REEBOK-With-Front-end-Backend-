import { FaShopify } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { MdDarkMode, MdOutlineShoppingCart } from "react-icons/md";
import { TfiSearch } from "react-icons/tfi";
import { VscAccount, VscHeartFilled } from "react-icons/vsc";

const Header = () => {
  return (
    <div className="w-full h-[11vh] justify-center items-center flex top-0 sticky shadow-md bg-[#ffff]">
      <div className="flex justify-between items-center bg-[] w-[93%] h-[7vh]">
        <div className="w-[20%] flex relative">
          <FaShopify size={36} className="text-[#FF385C]" />
          <GiShoppingCart
            size={18}
            className="text-[#FF385C]  absolute mx-9 bottom-0"
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
            <button
              className=" py-[12px] px-[29px]   relative flex justify-center  
              max-sm:hidden max-lg:hidden max-xl:hidden shadow-md items-center gap-1 hover:text-[black)] hover:before:translate-x-[105%]
        overflow-hidden before:transition-transform
        before:duration-[1s] ease-in-out text-white before:bg-[#FF385C] before:absolute
        before:top-0 before:left-0 before:w-full before:h-full
        transition-colors duration-[1s] before:z-[-1] z-[1]
        hover:text-black rounded-[4px]
         bg-[#fff]
        h-11 text-[13px] font-medium"
            >
              Sign-In
            </button>
          </div>
        </div>

        <div className=" gap-7 flex justify-between items-center max-sm:gap-2 max-lg:gap-2 max-xl:gap-2">
          <div className="justify-center items-center flex rounded-[50%] text-[#FF385C] object-cover">
            <VscAccount size={25} />
          </div>
          <div className="justify-center items-center flex rounded-[50%] max-sm:hidden">
            <VscHeartFilled
              size={25}
              className="text-[#FF385C] max-lg:hidden max-xl:hidden"
            />
          </div>
          <div className="justify-center items-center flex rounded-[50%] max-sm:flex">
            <MdOutlineShoppingCart size={25} className="text-[#FF385C]" />
          </div>
          <div className="justify-center items-center flex rounded-[50%] max-sm:hidden max-lg:hidden max-xl:hidden">
            <MdDarkMode size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

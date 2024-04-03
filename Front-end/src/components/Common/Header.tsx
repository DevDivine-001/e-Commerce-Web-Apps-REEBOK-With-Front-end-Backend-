import { FaShopify } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { MdDarkMode, MdOutlineShoppingCart } from "react-icons/md";
import { TfiSearch } from "react-icons/tfi";
import { VscAccount, VscHeartFilled } from "react-icons/vsc";
import { Link } from "react-router-dom";
import Register from "../../auth/Register";
import { useState } from "react";



const Header = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (

     <header className="w-full h-[11vh] top-0 sticky shadow-md z-50 bg-[#ffff]">
      <div className="flex justify-center items-center w-[100%] h-[10vh]">
        <div className="flex justify-between items-center bg-[] w-[93%] h-[10vh]">
          <Link to="/" className="w-[20%] flex relative">
            <FaShopify size={37} className="text-[#FF385C]" />
            <GiShoppingCart
              size={20}
              className="text-[#FF385C]  absolute mx-8 bottom-0"
            />
          </Link>

          <div className="w-[53%] h-[10vh] bg-[] flex justify-between items-center ">
            <div className="w-[84%] flex h-[7vh] bg-[#fff] rounded-md border items-center p-1">
              <div className="flex items-center justify-center">
                <TfiSearch size={23} className="text-[silver]" />
              </div>
              <input
                type="text"
                className="p-3 h-[5vh] w-full bg-transparent outline-none"
              />
            </div>

            <div className="flex justify-center items-center flex-col">
              <button
                className=" py-[11px] px-[28px]   relative flex justify-center  
              max-sm:hidden max-lg:hidden max-xl:hidden shadow-md items-center gap-1 hover:text-[black)] hover:before:translate-x-[105%]
        overflow-hidden before:transition-transform
        before:duration-[1s] ease-in-out text-white before:bg-[#FF385C] before:absolute
        before:top-0 before:left-0 before:w-full before:h-full
        transition-colors duration-[1s] before:z-[-1] z-[1]
        hover:text-black rounded-[4px]
         bg-[#fff]
        h-11 text-[13px] font-medium"
                onClick={openModal}
              >
                Sign-In
                {/* <Register /> */}
              </button>
            </div>
          </div>

          <div className=" gap-7 flex justify-between items-center max-sm:gap-2 max-lg:gap-2 max-xl:gap-2">
            <div className="justify-center items-center flex rounded-[50%] text-[#FF385C] object-cover">
              <Link to="/profile-screen">
                <VscAccount size={25} />
              </Link>
            </div>
            <div className="justify-center items-center flex rounded-[50%] max-sm:hidden">
              <Link to="/save">
                <VscHeartFilled
                  size={25}
                  className="text-[#FF385C] max-lg:hidden max-xl:hidden"
                />
              </Link>
            </div>
            <div className="justify-center items-center flex rounded-[50%] max-sm:flex">
              <Link to="/add-to-cart">
                <MdOutlineShoppingCart size={25} className="text-[#FF385C]" />
              </Link>
            </div>
            <div className="justify-center items-center flex rounded-[50%] max-sm:hidden max-lg:hidden max-xl:hidden">
              <MdDarkMode size={25} />
            </div>
          </div>
        </div>
      </div>
      <Register showModal={showModal} setShowModal={setShowModal} />
    </header>
  );
};

export default Header;

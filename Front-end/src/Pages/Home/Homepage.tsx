import { CgDarkMode } from "react-icons/cg";
import { FaCaretDown } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";

const Homepage = () => {
  return (
    <div className="bg-[] w-[100%] h-[100vh]">
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src="" alt="" className="w-10 uppercase" />
              <span>Shopsy</span>
            </a>
          </div>
          {/* Search Bar and order button */}
          <div className="flex items-center justify-between gap-4">
            <div className="group relative sm:block hidden">
              <input
                type="text"
                name=""
                id=""
                className="w-[150px] sm:w-[150px] text-[#000] group-hover:w-[180px] transition-all duration-300
                   rounded-full border border-gray-300 px-2 py-1
                   focus:outline-none focus:border-1
                   focus:border-primary"
                placeholder="search"
              />
              <IoMdSearch
                className="text-gray-500
                   group-hover:text-primary  top-1/2 -translate-y-1/2 right-3 absolute"
              />
            </div>
            {/* order  button */}

            {/* darkMode */}
            <div>
              <CgDarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* Lower Navbar */}
      <div className="flex justify-center">
        <li>
          <a
            href=""
            className="inline-block px-4 hover:text-primary duration-300"
          ></a>
        </li>

        {/* Simple Dropdown and Links */}
      </div>
    </div>
  );
};

export default Homepage;

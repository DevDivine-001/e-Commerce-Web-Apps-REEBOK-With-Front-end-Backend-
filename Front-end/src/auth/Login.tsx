import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

  // const [showModal, setShowModal] = useState(false)

const Login = ({ showModa, setShowModa }: any) => {
  return (
    <>
      {showModa && (
        <div
          className={`fixed inset-0 flex justify-center items-center transition-colors ${
            open ? "visible bg-black/20 z-50 backdrop-blur-sm" : "invisible"
          }`}
        >
          <form
            className="bg-[#fff] h-auto w-[35%] z-10 relative flex-col flex gap-6 p-2 rounded-md items-center "
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-once="true"
          >
            <h1 className="w-full h-[7vh] bg-[] flex items-center justify-center border-bottom text-2xl font-extrabold">
              Login
            </h1>
            <div className="flex-col w-full h-[7vh] bg-[] flex items-center justify-center ">
              <span
                className="text-2xl
          font-bold"
              >
                Welcome back
              </span>
              <span
                className="   font-light
          text-neutral-500 text-[15px]"
              >
                Login to your account!
              </span>
            </div>
            <div className="flex absolute top-0 ml-[450px]">
              {" "}
              <button
                onClick={() => setShowModa((prev: any) => !prev)}
                className="p-2 justify-center items-center flex"
              >
                X
              </button>
            </div>

            <div className="gap-3 flex flex-col w-[93%]">
              <input
                type="email"
                className="p-3 rounded-md border outline-none"
                placeholder="Email"
              />

              <input
                type="password"
                className="p-3 rounded-md border outline-none"
                placeholder="Password"
              />
              <div className="flex justify-end items-center  w-[%]">
                <Link to="/reset-password-auth">Reset Password</Link>
              </div>
            </div>

            <div className="flex flex-col gap-3 w-[93%]">
              <button
                className=" py-[11px] px-[28px] relative flex justify-center
                  max-sm:hidden max-lg:hidden max-xl:hidden shadow-md items-center gap-1 hover:text-[black)] hover:before:translate-x-[105%]
            overflow-hidden before:transition-transform
            before:duration-[1s] ease-in-out text-white before:bg-[#FF385C] before:absolute
            before:top-0 before:left-0 before:w-full before:h-full
            transition-colors duration-[1s] before:z-[-1] z-[1]
            hover:text-black rounded-[4px]
             bg-[#fff]
            h-11 text-[15px] font-bold disabled:cursor-not-allowed
            disabled:opacity-70
            hover:opacity-80"
              >
                Continue
              </button>
              <button
                className=" py-[11px] px-[28px]   relative flex justify-center
                  max-sm:hidden max-lg:hidden max-xl:hidden shadow-md items-center gap-1 hover:text-[black)] hover:before:translate-x-[105%]
            overflow-hidden before:transition-transform
            before:duration-[1s] ease-in-out text-white before:bg-[#FF385C] before:absolute
            before:top-0 before:left-0 before:w-full before:h-full
            transition-colors duration-[1s] before:z-[-1] z-[1]
            hover:text-black rounded-[4px]
             bg-[#fff]
            h-11 text-[15px] font-bold disabled:cursor-not-allowed"
              >
                <FcGoogle size={20} className="text-2xl" />
                <span> Continue with Goolge</span>
              </button>
              <button
                className=" py-[11px] px-[28px]   relative flex justify-center
                  max-sm:hidden max-lg:hidden max-xl:hidden shadow-md items-center gap-1 hover:text-[black)] hover:before:translate-x-[105%]
            overflow-hidden before:transition-transform
            before:duration-[1s] ease-in-out text-white before:bg-[#FF385C] before:absolute
            before:top-0 before:left-0 before:w-full before:h-full
            transition-colors duration-[1s] before:z-[-1] z-[1]
            hover:text-black rounded-[4px]
             bg-[#fff]
            h-11 text-[15px] disabled:cursor-not-allowed font-bold"
              >
                <AiFillGithub scale={30} className="text-[#000]" />
                <span> Continue with GitHub</span>
              </button>
            </div>

            <div className="flex gap-2 font-bold text-[15px]">
              <span
                className=" text-neutral-500
        text-center
        font-light"
              >
                Already have an account
              </span>
              <span
                className="
                  text-neutral-800
        cursor-pointer
        hover:underline
                "
              >
                <div onClick={() => setShowModa((prev: any) => !prev)}>
                  Register
                </div>
              </span>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;

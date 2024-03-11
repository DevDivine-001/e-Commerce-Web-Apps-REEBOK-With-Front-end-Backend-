import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <div className="flex justify-center items-center h-[89vh]">
      <form
        className="bg-[#fff] h-auto w-[35%]  flex-col flex gap-4 p-3 rounded-md items-center shadow-md"
        data-aos="zoom-in"
        data-aos-duration="600"
        data-aos-once="true"
      >
        <h1 className="w-full h-[7vh] bg-[] flex items-center justify-center border-bottom text-2xl font-extrabold">
          Reset Password
        </h1>
        <div className="flex-col w-full h-auto gap-2 bg-[] flex items-center justify-center ">
          {/* <span
            className="text-2xl
          font-bold"
          >
            Welcome back
          </span> */}
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
            // onClick={() => setShowModa((prev: any) => !prev)}
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
          <div className="flex justify-end items-center  w-[%]"></div>
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
        </div>

        {/* <div className="flex gap-2 font-bold text-[15px]">
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
        </div> */}
      </form>
    </div>
  );
};

export default ResetPassword;

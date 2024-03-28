import Image from "../assets/bg-1.3d2a7a2d0a1ed5a6e5b206301d008f80.svg";

const ResetPassword = () => {
  return (
    <div
      className="flex justify-center items-center h-[89vh]
    "
      style={{
        backgroundImage: `url(${Image})`,
      }}
    >
      <div className="w-[93%] h-[82vh] bg-[] flex justify-center items-center">
        <form
          className="bg-[#fff] h-[] w-[38%]  flex-col flex gap-6 p-3 rounded-md items-center shadow-md max-sm:w-full max-md:w-full max-lg:w-full max-xl:w-full"
          data-aos="zoom-in"
          data-aos-duration="600"
          data-aos-once="true"
        >
          <div className="flex-col w-full h-auto gap-3 bg-[] flex items-center justify-center ">
            <h1 className="w-full h-[7vh] bg-[] flex items-center justify-center border-bottom text-2xl font-extrabold">
              Reset Password
            </h1>
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
      
              className="p-2 justify-center items-center flex"
            >
              X
            </button>
          </div>

          <div className="gap-5 flex flex-col w-[93%] max-sm:w-full">
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

          <div className="flex flex-col gap-3 w-[93%] max-sm:w-full">
            <button
              className=" py-[11px] px-[28px] relative flex justify-center
                   max-lg:flex max-xl:flex shadow-md items-center gap-1 hover:text-[black)] hover:before:translate-x-[105%]
            overflow-hidden before:transition-transform
            before:duration-[1s] ease-in-out text-white before:bg-[#FF385C] before:absolute
            before:top-0 before:left-0 before:w-full before:h-full
            transition-colors duration-[1s] before:z-[-1] z-[1]
            hover:text-black rounded-[4px]
             bg-[#fff]
            h-11 text-[15px] font-bold disabled:cursor-not-allowed
            disabled:opacity-70
            hover:opacity-80 max-sm:flex"
            >
              Continue
            </button>
          </div>


        </form>
      </div>
    </div>
  );
};

export default ResetPassword;

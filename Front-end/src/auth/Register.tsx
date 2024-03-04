// import { useState } from "react";
// import Modal from "../Hook/Modal";
// import { FcGoogle } from "react-icons/fc";
// import { AiFillGithub } from "react-icons/ai";

// const Register = () => {
//   const [open, setOpen] = useState<boolean>(false);
//   return (
//     <div className="w-full flex justify-center">
//       <button onClick={() => setOpen(true)}>Sign-In</button>
//       <Modal open={open} onClose={() => setOpen(false)}>
//         <form className="flex flex-col gap-6 p-2 w-[45%] bg-[#fff] h-auto rounded-md items-center">
//           <h1 className="w-full h-[7vh] bg-[] flex items-center justify-center border-bottom text-2xl font-extrabold">
//             Register
//           </h1>
//           <div className="flex-col w-full h-[7vh] bg-[] flex items-center justify-center ">
//             <span
//               className="text-2xl
//         font-bold"
//             >
//               Welcome to Airbnb
//             </span>
//             <span
//               className="   font-light
//         text-neutral-500 text-[15px]"
//             >
//               Create an account!
//             </span>
//           </div>
//           {/* <div className="flex flex-col bg-[green] gap-5 w-[90%]"> */}
//           <input
//             type="text"
//             className="p-3 rounded-md border outline-none w-[93%]"
//           />
//           <input
//             type="text"
//             className="p-3 rounded-md border outline-none w-[93%]"
//           />
//           <input
//             type="text"
//             className="p-3 rounded-md border outline-none w-[93%]"
//           />
//           {/* </div> */}

//           <div className="flex flex-col gap-3 w-[93%]">
//             <button
//               className=" py-[11px] px-[28px] relative flex justify-center  
//               max-sm:hidden max-lg:hidden max-xl:hidden shadow-md items-center gap-1 hover:text-[black)] hover:before:translate-x-[105%]
//         overflow-hidden before:transition-transform
//         before:duration-[1s] ease-in-out text-white before:bg-[#FF385C] before:absolute
//         before:top-0 before:left-0 before:w-full before:h-full
//         transition-colors duration-[1s] before:z-[-1] z-[1]
//         hover:text-black rounded-[4px]
//          bg-[#fff]
//         h-11 text-[15px] font-bold disabled:cursor-not-allowed
//         disabled:opacity-70
//         hover:opacity-80"
//             >
//               Continue
//             </button>
//             <button
//               className=" py-[11px] px-[28px]   relative flex justify-center  
//               max-sm:hidden max-lg:hidden max-xl:hidden shadow-md items-center gap-1 hover:text-[black)] hover:before:translate-x-[105%]
//         overflow-hidden before:transition-transform
//         before:duration-[1s] ease-in-out text-white before:bg-[#FF385C] before:absolute
//         before:top-0 before:left-0 before:w-full before:h-full
//         transition-colors duration-[1s] before:z-[-1] z-[1]
//         hover:text-black rounded-[4px]
//          bg-[#fff]
//         h-11 text-[15px] font-bold disabled:cursor-not-allowed"
//             >
//               <FcGoogle size={20} className="text-2xl" />
//               <span> Continue with Goolge</span>
//             </button>
//             <button
//               className=" py-[11px] px-[28px]   relative flex justify-center  
//               max-sm:hidden max-lg:hidden max-xl:hidden shadow-md items-center gap-1 hover:text-[black)] hover:before:translate-x-[105%]
//         overflow-hidden before:transition-transform
//         before:duration-[1s] ease-in-out text-white before:bg-[#FF385C] before:absolute
//         before:top-0 before:left-0 before:w-full before:h-full
//         transition-colors duration-[1s] before:z-[-1] z-[1]
//         hover:text-black rounded-[4px]
//          bg-[#fff]
//         h-11 text-[15px] disabled:cursor-not-allowed font-bold"
//             >
//               <AiFillGithub scale={30} className="text-[#000]" />
//               <span> Continue with GitHub</span>
//             </button>
//           </div>
//           <div className="flex gap-2 font-bold text-[15px]">
//             <span
//               className=" text-neutral-500
//     text-center
//     font-light"
//             >
//               Already have an account
//             </span>
//             <span
//               className="
//               text-neutral-800
//     cursor-pointer
//     hover:underline
//             "
//             >
//               Login
//             </span>
//           </div>

//           {/* <button onClick={() => setOpen(false)}>close</button> */}
//         </form>
//       </Modal>
//     </div>
//   );
// };

// export default Register;

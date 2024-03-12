import banner from "../../assets/Desktop_Single_Banner__1152x252.png";

const Bannerone = () => {
  return (
    <div className="w-[100%] h-[50vh] flex justify-center items-center max-sm:h-[99px]">
      <div className="bg-[#fff] flex items-center justify-center w-[93%] rounded-[7px] p-2 shadow-md max-sm:h-[90px]">
        <img
          style={{
            backgroundImage: `url(${banner})`,
          }}
          alt=""
          className="w-[100%] h-[280px] flex justify-center items-center rounded-md hover:shadow-md cursor-pointer max-sm:h-[75px]"
        />
      </div>
    </div>
  );
};

export default Bannerone;

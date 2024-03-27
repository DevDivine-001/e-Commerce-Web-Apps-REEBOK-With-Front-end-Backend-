import bannerimg from "../../assets/Desktop_Single_Banner__1152x252.png";
const Banner = () => {
  const Bannerimg = [
    {
      imgBanner: bannerimg,
    },
  ];
  return (
    <div className="w-[100%] h-[50vh] flex justify-center items-center max-sm:h-[99px]"
    >
      {Bannerimg.map((data) => (
        <div className="bg-[#fff] flex items-center justify-center w-[93%] rounded-[7px] p-2 shadow-md max-sm:h-[90px]"
        
       data-aos="flip-up"
            data-aos-duration="600"
            data-aos-once="true"
        >
          <img
            src={data.imgBanner}
            alt=""
            className="w-[100%] h-[280px] flex justify-center items-center rounded-md hover:shadow-md cursor-pointer max-sm:h-[75px]"
          />
        </div>
      ))}
    </div>
  );
}

export default Banner

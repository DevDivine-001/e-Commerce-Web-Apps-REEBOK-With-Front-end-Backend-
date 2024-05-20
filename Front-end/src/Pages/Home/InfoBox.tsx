import img from "../../assets/pexels-karolina-grabowska-5625134.jpg"
import bag from "../../assets/pexels-max-fischer-5868275.jpg"

// const image =[
//   {
//     img:""
//   }
// ]

const InfoBox = () => {
  return (
    <div className="flex w-[17%] h-full bg-[] gap-9 flex-col  max-sm:hidden max-md:hidden max-lg:hidden max-xl:hidden" data-aos="fade-left">
      <div className="w-full h-[34vh] bg-[#ffff] rounded-[7px] shadow-md border-none"
     data-aos="fade-left"
     data-aos-duration="1500"
            data-aos-once="true">
      
        <div className="w-full gap-2 flex bg-[#000] border-none">
          
        </div>

      </div>
      <div className="w-full h-[40vh] bg-red- rounded-[7px] shadow-md flex items-center justify-center flex-col gap-2 border-none">
        <img src={img} alt="" className=" rounded-[7px] shadow-md cursor-pointer border-none"
       data-aos="fade-left"
     data-aos-duration="1500"
            data-aos-once="true"
        />
        <img src={bag} alt="" className=" rounded-[7px] shadow-md cursor-pointer border-none"
          data-aos="fade-left"
     data-aos-duration="1500"
            data-aos-once="true"
        />
      </div>
    </div>
  )
}

export default InfoBox
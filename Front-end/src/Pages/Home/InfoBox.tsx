import img from "../../assets/pexels-karolina-grabowska-5625134.jpg"
import bag from "../../assets/pexels-max-fischer-5868275.jpg"

// const image =[
//   {
//     img:""
//   }
// ]

const InfoBox = () => {
  return (
    <div className="flex w-[17%] h-full bg-[] gap-9 flex-col rounded-[7px] shadow-md max-sm:hidden max-md:hidden max-lg:hidden max-xl:hidden" data-aos="fade-left"
     data-aos-duration="2000"
            data-aos-once="true"
    
    >
      <div className="w-full h-[34vh] bg-[#ffff] rounded-[7px] shadow-md">
        <div className="w-full gap-2 flex bg-[#000]">

        </div>

      </div>
      <div className="w-full h-[40vh] bg-red- rounded-[7px] shadow-md flex items-center justify-center flex-col gap-2">
        <img src={img} alt="" className=" rounded-[7px] shadow-md cursor-pointer"/>
        <img src={bag} alt="" className=" rounded-[7px] shadow-md cursor-pointer"/>

      </div>
    </div>
  )
}

export default InfoBox
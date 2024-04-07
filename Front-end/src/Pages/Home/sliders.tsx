import Slider from "react-slick"
import image from "../../assets/712_384.jpeg"
import image2 from "../../assets/712x384_Adi_bd.png"
import image3 from "../../assets/712x384copy2-treasurehunt.jpeg"
import image4 from "../../assets/slider.jpeg"
import image5 from "../../assets/pexels-pavel-danilyuk-8638226.jpg"
import image6 from "../../assets/Desktop_Homepage_Slider__712x384.png"
import image7 from "../../assets/Desktop_Homepage_Slider__712x384 (3).png"
import image8 from "../../assets/712x384copy-3.jpeg"
import image9 from "../../assets/newer-712x384.png"
import image10 from "../../assets/pexels-andrea-piacquadio-994234.jpg"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const imagesSlider = [
  {
    id: 1,
    imag:image
  },
  {
    id: 2,
    imag:image2
  },
  {
    id: 3,
    imag:image3
  },
  {
    id: 4,
    imag:image4
  },
  {
    id: 5,
    imag:image5
  },
  {
    id: 6,
    imag:image6
  },
  {
    id: 7,
    imag:image7
  },
  {
    id: 8,
    imag:image8
  },
  {
    id: 9,
    imag:image9
  },
  {
    id:10,
    imag:image10
  },

]

const Sliders = () => {

    const settings = {
        dots: true,
        Infinite: true,
        fade: true,
        arrows:false,
        speed: 1000,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    }
  return (

<div
   data-aos="zoom-in"
     data-aos-duration="1500"
            data-aos-once="true"
           className="w-[64%] h-full bg-[#ffff] border-none shadow-md max-sm:w-full max-md:w-full max-lg:w-full max-xl:w-full"
>

 <Slider {...settings}  className="w-[100%] h-[77vh] bg-[] object-cover border-none "

>
{imagesSlider.map((data) =>(
  <img key={data.id} src={data.imag}  className="w-full h-[82vh] rounded-[7px] shadow-md flex justify-center items-center  border-none cursor-pointer"
  data-aos="zoom-out"
  data-aos-duration="1500"
  data-aos-once="true"
  />
)) }
      </Slider>
</div>

  )
}
export default Sliders
import InfoBox from "./InfoBox";
import ProductsNavLink from "./ProductsNavLink";
import Sliders from "./sliders";


const Hero = () => {
  return (
    <div
      className="w-[100%] h-auto bg-
      ">
      <div className="flex justify-center items-center w-[100%] h-[89vh] bg-[]">
        <div className="w-[93%] h-[82vh] bg-[] flex
      justify-between">
          <ProductsNavLink/>
          <Sliders/>
         <InfoBox/>
        </div>
      </div>
    </div>
  );
};
export default Hero;
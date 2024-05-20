
import { Link } from "react-router-dom";


const LimitedDeals = () => {
  const TopProducts = [
    {
      id:1,
      img:"https://i.im.ge/2024/05/20/KuNGqC.1-2.jpeg",
      TopProducts:"Computing Deals",
        Price:"₦1000,000,00",
    },
    {
      id:2,
      img:"https://i.im.ge/2024/05/20/KuNn3D.1-1.jpeg",
      TopProducts:"Home Essentials",
        Price:"₦700,0000",
    },
    {
      id:3,
      img:"https://i.im.ge/2024/05/20/KuPoj1.1-3.jpeg",
      TopProducts:"Best Deals",
        Price:"₦120,000",
    },
      {
    id:4,
    img:"https://i.im.ge/2024/05/20/KuPF3W.1-4.jpeg",
   TopProducts:"Phones & Tablets",
     Price:"₦150,0000",
  },
    {
    id:5,
    img:"https://i.im.ge/2024/05/20/KuPuUr.1-5-removebg-preview.png",
   TopProducts:"Mobile Accessories",
     Price:"₦500,000",
  },
    {
    id:6,
    img:"https://i.im.ge/2024/05/20/KuP2sT.1.jpeg",
   TopProducts:"Grocery Deals",
   Price:"₦100,000",

  },
  
]
  return<div className="w-[100%] h-auto flex justify-center items-center bg-[] py-[2%]">
     <div className="w-[93%] py-[1%] flex justify-center it flex-col max-sm:py-[3%] max-lg:py-[3%] bg-[#fff] rounded-md shadow-md">
    <div className="p-2">  <span>Limited Deals</span></div>
       <Link to="/see-products" className="grid grid-cols-3 gap-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 p-2 max-sm:w-full w-[100%] bg-[] lg:grid-cols-4">

{
  TopProducts.map((data) => (
           <div className="Products">
<img src={data.img} className="w-[100%]  py-[0px] px-[2px] bg-[#] flex items-center justify-center rounded-md object-cover max-sm:px-[0%]" alt="" />
<div>
  
<button className="text-sm sm:text-sm max-lg:text-bold">{data.TopProducts}</button>
<div>{data.Price}</div>
</div>
        </div>
  ))
}
 

  </Link>
     </div>
  </div>

  
  ;
};

export default LimitedDeals;



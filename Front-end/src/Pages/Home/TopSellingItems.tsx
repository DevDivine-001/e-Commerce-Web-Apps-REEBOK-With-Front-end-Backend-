

// const TopSellingItems = () => {
//   return (
//     <div>
//       TopSellingItems
//     </div>
//   )
// }

import { Link } from "react-router-dom";

// export default TopSellingItems




const TopSellingItems = () => {
  const TopProducts = [
    {
      id:1,
      img:"https://i.im.ge/2024/05/08/ZVuvjc.Artboard-1-copy-3-removebg-preview.png",
      TopProducts:"Computing Deals"
    },
    {
      id:2,
      img:"https://i.im.ge/2024/05/08/ZVFChG.Artboard-1-copy-removebg-preview.png",
      TopProducts:"Home Essentials"
    },
    {
      id:3,
      img:"https://i.im.ge/2024/05/08/ZVFkG8.Artboard-1-removebg-preview.png",
      TopProducts:"Best Deals"
    },
      {
    id:4,
    img:"https://i.im.ge/2024/05/08/ZVFQsy.Artboard-1-copy-2-removebg-preview.png",
   TopProducts:"Phones & Tablets",
  },
    {
    id:5,
    img:"https://i.im.ge/2024/05/08/ZVFOo9.Artboard-1-copy-7-removebg-preview.png",
   TopProducts:"Mobile Accessories",
  },
    {
    id:6,
    img:"https://i.im.ge/2024/05/08/ZVFrmF.Artboard-1-copy-4-removebg-preview.png",
   TopProducts:"Grocery Deals",
  },
  
]
  return<div className="w-[100%] h-auto flex justify-center items-center bg-[] py-[2%]">
     <div className="w-[93%] py-[1%] flex justify-center it flex-col max-sm:py-[3%] max-lg:py-[3%] bg-[#fff] rounded-md shadow-md">
    <div className="p-2">  <span>Top Selling Items</span></div>
       <Link to="/see-products" className="grid grid-cols-3 gap-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 p-2 max-sm:w-full w-[100%] bg-[] lg:grid-cols-4">
 {TopProducts.map((data)=> (
       <div className="TopProducts" key={data .id}>
      
<img src={data.img} className="w-[100%]  py-[0px] px-[0px] bg-[#0099FF] flex items-center justify-center rounded-md object-cover max-sm:px-[0%]" alt="" />
       <div className="flex items-center justify-center text-wrap"> <button className="text-sm sm:text-sm text-[px] text-wrap text-center max-lg:text-bold">{data.TopProducts}</button></div>
       </div>
  ))
 }

  </Link>
     </div>
  </div>

  
  ;
};

export default TopSellingItems;



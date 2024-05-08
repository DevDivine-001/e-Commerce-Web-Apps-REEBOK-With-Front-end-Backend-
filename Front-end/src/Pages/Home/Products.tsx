import img1 from "../../assets/Artboard_1_copy_3-removebg-preview.png"
import img4 from "../../assets/Artboard_1_copy_2-removebg-preview.png"
import img7 from "../../assets/Artboard_1_copy_8.png"
import img12 from "../../assets/Made-in-naija.jpeg"
import img5 from "../../assets/Artboard_1_copy_7.png"
import img2 from "../../assets/Artboard_1_copy_4.png"
const Products = () => {
  const Products = [
    {
      id:1,
      img:img1,
      products:"Computing Deals"
    },
    {
      id:2,
      img:img2,
      products:"Home Essentials"
    },
    {
      id:3,
      img:"https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/0-1-thumbnails-update/April-week-18/Artboard_1.png",
      products:"Best Deals"
    },
      {
    id:4,
    img:img4,
   products:"Phones & Tablets",
  },
    {
    id:5,
    img:img5,
   products:"Mobile Accessories",
  },
    {
    id:6,
    img:"",
   products:"Grocery Deals",
  },
    {
    id:7,
    img:img7,
   products:"Generators",
  },
    {
    id:8,
    img:"https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/0-1-thumbnails-update/April-week-18/Artboard_1_copy_13.png",
   products:"Special Offers",
  },
    {
    id:9,
    img:"",
   products:"Fashion Deals",
  },
    {
    id:10,
    img:"https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/0-1-thumbnails-update/April-week-18/Artboard_1_copy_5.png",
   products:"Televisions",
  },
    {
    id:11,
    img:"",
   products:"Refrigerators",
  },
  {
  id:12,
  img:img12,
  products:"Call to Order",
  },
  
]
  return<div className="w-[100%] h-auto flex justify-center items-center bg-[]">
     <div className="w-[93%] py-[2px] flex justify-center items-center max-sm:py-[1%] max-lg:py-[3%] bg-[#ffff] rounded-md shadow-md">
       <div className="grid grid-cols-3 gap-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 p-2 max-sm:w-full w-[100%] bg-[] lg:grid-cols-4">
 {Products.map((data)=> (
       <div className="video" key={data .id}>
      
<img src={data.img} className="w-[100%]  py-[0px] px-[0px] bg-[#0099FF] flex items-center justify-center rounded-md object-cover max-sm:px-[0%]" alt="" />
       <div className="flex items-center justify-center text-wrap"> <button className="text-sm sm:text-sm text-[px] text-wrap text-center max-lg:text-bold">{data.products}</button></div>
       </div>
  ))
 }

  </div>
     </div>
  </div>

  
  ;
};

export default Products;




const Products = () => {
  const Products = [
    {
      id:1,
      img:"https://i.im.ge/2024/05/08/ZVuvjc.Artboard-1-copy-3-removebg-preview.png",
      products:"Computing Deals"
    },
    {
      id:2,
      img:"https://i.im.ge/2024/05/08/ZVFChG.Artboard-1-copy-removebg-preview.png",
      products:"Home Essentials"
    },
    {
      id:3,
      img:"https://i.im.ge/2024/05/08/ZVFkG8.Artboard-1-removebg-preview.png",
      products:"Best Deals"
    },
      {
    id:4,
    img:"https://i.im.ge/2024/05/08/ZVFQsy.Artboard-1-copy-2-removebg-preview.png",
   products:"Phones & Tablets",
  },
    {
    id:5,
    img:"https://i.im.ge/2024/05/08/ZVFOo9.Artboard-1-copy-7-removebg-preview.png",
   products:"Mobile Accessories",
  },
    {
    id:6,
    img:"https://i.im.ge/2024/05/08/ZVFrmF.Artboard-1-copy-4-removebg-preview.png",
   products:"Grocery Deals",
  },
    {
    id:7,
    img:"https://i.im.ge/2024/05/08/ZVF1hX.Artboard-1-copy-8-removebg-preview.png",
   products:"Generators",
  },
    {
    id:8,
    img:"https://i.im.ge/2024/05/08/ZVOZdr.Artboard-1-copy-13-removebg-preview.png",
   products:"Special Offers",
  },
    {
    id:9,
    img:"https://i.im.ge/2024/05/08/ZVODCJ.Artboard-1-copy-6-removebg-preview.png",
   products:"Fashion Deals",
  },
    {
    id:10,
    img:"https://i.im.ge/2024/05/08/ZVFPwT.Artboard-1-copy-5-removebg-preview.png",
   products:"Televisions",
  },
    {
    id:11,
    img:"https://i.im.ge/2024/05/08/ZVOQcP.Artboard-1-copy-9-removebg-preview.png",
   products:"Refrigerators",
  },
  {
  id:12,
  img:"https://i.im.ge/2024/05/08/ZVFqaM.Made-in-naija-removebg-preview-1.png",
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


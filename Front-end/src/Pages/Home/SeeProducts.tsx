// import img2 from "../../assets/712x384copy2-treasurehunt.jpeg"
const SeeProducts = () => {
  const Products = [
    {
      id:1,
      img:"",
      productsName:"Mobile Accessories"
    },
    {
      id:2,
      img:"",
      productsName:"Home Essentials"
    },
    {
      id:3,
      img:"",
      productsName:"Best Deals"
    },
      {
    id:4,
    img:"",
   productsName:"Phones & Tablets",
  },
    {
    id:5,
    img:"",
   productsName:"Computing Deals",
  },
    {
    id:6,
    img:"",
   productsName:"Grocery Deals",
  },
    {
    id:7,
    img:"",
   productsName:"Grocery Deals",
  },
    {
    id:8,
    img:"",
   productsName:"Grocery Deals",
  },
    {
    id:9,
    img:"",
   productsName:"Grocery Deals",
  },
    {
    id:10,
    img:"",
   productsName:"Grocery Deals",
  },
    {
    id:11,
    img:"",
   productsName:"Grocery Deals",
  },
  {
  id:12,
  img:"",
  productsName:"Grocery Deals",
  },
  
]
  return<div className="w-[100%] h-auto flex justify-center items-center bg-[]">
     <div className="w-[93%] py-[1%] flex justify-center items-center max-sm:py-[3%] max-lg:py-[3%]">
       <div className="grid grid-cols-3 gap-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 p-2 max-sm:w-full w-[100%] bg-[] lg:grid-cols-4">
 {Products.map((data)=> (
       <div className="video" key={data .id}>
      
<img src={data.img} className="w-[100%] py-[60%] bg-[red] flex items-center justify-center rounded-md object-cover max-sm:py-[55%]" alt="" />
       <div className="flex items-center justify-center text-wrap"> <button className="text-sm sm:text-sm text-[px] text-wrap text-center max-lg:text-bold">{data.productsName}</button></div>
       </div>
  ))
 }

  </div>
     </div>
  </div>

  
  ;
};

export default SeeProducts;


import { Link } from "react-router-dom";

const products = [
  {
    id:1,
    img:"",
    text:"Best Deals",
  },
  {
    id:2,
    img:"",
    text:"Refrigerators",
  },
  {
    id:3,
    img:"",
    text:"Televisions",
  },
  {
    id:4,
    img:"",
    text:"Special Offers",
  },
  {
    id:5,
    img:"",
    text:"Fashion Deals",
  },
  {
    id:6,
    img:"",
    text:"Generators",
  },
  {
    id:7,
    img:"",
    text:"Phones & Tablets",
  },
  {
    id:8,
    img:"",
    text:"Computing Deals",
  },
  {
    id:9,
    img:"",
    text:"Grocery Deals",
  },
  {
    id:10,
    img:"",
    text:"Mobile Accessories",
  },
  {
    id:11,
    img:"",
    text:"Home Essentials",
  },
  {
    id:12,
    img:"",
    text:"Call to Order",
  },
]

const Products = () => {
  return (
    <div className="flex justify-center items-center w-[100%] h-[87vh] bg-[]">
      <section className="w-[93%] h-[87vh] bg-[#fff] rounded-[7px] flex  shadow-md flex-wrap justify-center  items-center">
        <div className="w-[100%] h-[85vh]  flex-wrap justify-between flex  items-center max-sm:w-full">

             {
              products.map((data) => (
                 <Link to="/see-products" className="flex justify-center items-center flex-col bg-[red] w-[16%]  max-sm:w-[32%] max-sm:h-[20vh] rounded-[7px] max-sm:flex" key={data.id}>
                <img src="" alt="" className="w-[93%] h-[40vh] bg-[blue] object-cover flex justify-center items-center border-none rounded-[7px] cursor-pointer max-sm:w-full"/>
      <Link to="/see-products">          <button className="cursor-pointer">{data.text}</button></Link></Link >
              ))
             }
            
        
       

        </div>
    
       
       
    
  
      
    
 
  
        
      
      </section>
    </div>
  );
};

export default Products;

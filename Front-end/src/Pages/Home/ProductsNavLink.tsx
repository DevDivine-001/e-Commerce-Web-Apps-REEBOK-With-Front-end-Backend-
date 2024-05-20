import   {FaShopify}  from "react-icons/fa";
import { Link } from "react-router-dom";

const productIcons = [

    {
    id:1,
    text: "Fashion"
},
{
    id:2,
    text: "Gaming"
},
    {
    id: 3,
    text: "Power"
},
{
    id: 4,
    text: "Computing"
},

{
    id: 5,
    text: "Appliances"
},
{
    id: 6,
    text: "Electronics"
},
{
    id: 7,
    text: "Supermarket"
},
{
    id: 8,
    text: "Phone & Table"
},

{
    id: 9,
    text: "Home & Office"
},


{
    id:10,
    text: "Men's Fashion"
},
{
    id:11,
    text: "Baby Products"
},

{
    id:12,
    text: "Sporting Goods"
},
{
    id: 13,
    text: "Health & Beauty"
},
{
    id:14,
    text: "Women's Fashion"
},

]

const ProductsNavLink = () => {
  return (
      <div 
      data-aos="fade-right"
      data-aos-duration="1500"
             data-aos-once="true"
      className="flex w-[17%] bg-[#fff] rounded-[7px] border-none shadow-md gap-[14px] flex-col p-2 max-sm:hidden max-md:hidden max-lg:hidden max-xl:hidden"
            >
   {
    productIcons.map((data) => (
             <div className="flex items-center bg-[] gap-3 text-slate-700" key={data.id}>
<div><FaShopify/></div> <span className="hover:text-[#fea928] cursor-pointer"><Link to="/see-products">{data.text}</Link></span>
        </div>
    ))
   }

    </div>
  )
}

export default ProductsNavLink
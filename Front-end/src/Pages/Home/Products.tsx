import { useState } from "react";
import Modal from "../../Hook/Modal";
import { Link } from "react-router-dom";

const Products = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="flex justify-center items-center w-[100%] h-[82vh] bg-[]">
      <div className="w-[93%] h-[77vh] bg-[#fff] p-2 rounded-[7px] flex gap-4 shadow-md">
        <div
          className="flex flex-col bg-[green] w-[16%] h-[36vh] p-2 rounded-[7px] gap-2 hover:shadow-md hover:transition-transform 
        delay-200 hover:scale-90"
          data-aos="zoom-in"
          data-aos-duration="600"
          data-aos-once="true"
        >
          <div className="w-full h-[250px] flex justify-center items-center bg-[#fff] rounded-md"></div>
          <button onClick={() => setOpen(true)}>Best Deals</button>
          <Modal open={open} onClose={() => setOpen(false)}>
            <form action="" className="w-[60%] h-[66vh] bg-[red]">
              <Link to="/seeproducts">SeeProducts</Link>
            </form>
          </Modal>
        </div>
        <div className="flex flex-col bg-[green] w-[16%] h-[36vh] p-2 rounded-[7px] gap-2 hover:shadow-md hover:transition-transform delay-200 hover:scale-90 hover:">
          <div className="w-full h-[250px] flex justify-center items-center bg-[#fff] rounded-md"></div>
          <button onClick={() => setOpen(true)}>Best Deals</button>
          <Modal open={open} onClose={() => setOpen(false)}>
            <form action="" className="w-[60%] h-[66vh] bg-[red]">
              <Link to="/seeproducts">SeeProducts</Link>
            </form>
          </Modal>
        </div>
        <div className="flex flex-col bg-[green] w-[16%] h-[36vh] p-2 rounded-[7px] gap-2 hover:shadow-md hover:transition-transform delay-200 hover:scale-90 hover:">
          <div className="w-full h-[250px] flex justify-center items-center bg-[#fff] rounded-md"></div>
          <button onClick={() => setOpen(true)}>Best Deals</button>
          <Modal open={open} onClose={() => setOpen(false)}>
            <form action="" className="w-[60%] h-[66vh] bg-[red]">
              <Link to="/seeproducts">SeeProducts</Link>
            </form>
          </Modal>
        </div>
        <div className="flex flex-col bg-[green] w-[16%] h-[36vh] p-2 rounded-[7px] gap-2 hover:shadow-md hover:transition-transform delay-200 hover:scale-90 hover:">
          <div className="w-full h-[250px] flex justify-center items-center bg-[#fff] rounded-md"></div>
          <button onClick={() => setOpen(true)}>Best Deals</button>
          <Modal open={open} onClose={() => setOpen(false)}>
            <form action="" className="w-[60%] h-[66vh] bg-[red]">
              <Link to="/seeproducts">SeeProducts</Link>
            </form>
          </Modal>
        </div>
        <div className="flex flex-col bg-[green] w-[16%] h-[36vh] p-2 rounded-[7px] gap-2 hover:shadow-md hover:transition-transform delay-200 hover:scale-90 hover:">
          <div className="w-full h-[250px] flex justify-center items-center bg-[#fff] rounded-md"></div>
          <button onClick={() => setOpen(true)}>Best Deals</button>
          <Modal open={open} onClose={() => setOpen(false)}>
            <form action="" className="w-[60%] h-[66vh] bg-[red]">
              <Link to="/seeproducts">SeeProducts</Link>
            </form>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Products;

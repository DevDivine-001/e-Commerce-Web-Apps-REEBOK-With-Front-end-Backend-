import { useState } from "react";
import Modal from "../../Hook/Modal";
import { Link } from "react-router-dom";

const Products = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="flex justify-center items-center w-[100%] h-[92vh] bg-[red]">
      <div
        className="w-[93%] h-[82vh] bg-[#fff] p-3 rounded-md"
        data-aos-duration="500"
        data-aos-once="true"
      >
        <div className="flex flex-col bg-[green] w-[16%] h-[35vh] p-2 rounded-md">
          <div className="w-full h-[400px] flex justify-center items-center bg-[#fff] rounded-md"></div>
          <button onClick={() => setOpen(true)}>View Products</button>
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

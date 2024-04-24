import Image from "../../assets/bg-1.3d2a7a2d0a1ed5a6e5b206301d008f80.svg";

const  Add= () => {
  return (
    <div
      className="flex justify-center items-center"
      style={{
        backgroundImage: `url(${Image})`,
      }}
    >
          <div className="w-[93%] flex justify-center items-center h-[89vh]">
        <div
         
          className="w-full h-[80vh] bg-[#fff] rounded-md shadow-md"
        >
           Add-to-cart
        </div>
      </div>
    </div>
  );
};

export default  Add;

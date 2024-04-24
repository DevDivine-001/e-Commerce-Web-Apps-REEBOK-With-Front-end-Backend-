import Image from "../../assets/bg-1.3d2a7a2d0a1ed5a6e5b206301d008f80.svg";
const Save = () => {
  return (
    <div
      className="flex items-center justify-center"
      style={{
        backgroundImage: `url(${Image})`,
      }}
    >
          <div className="w-[93%] flex justify-center 
          items-center h-[89vh]">
        <div
        
          className="w-full h-[80vh] bg-[#fff] 
          rounded-md shadow-md"
        >
          Save
        </div>
      </div>
    </div>
  );
};

export default Save;
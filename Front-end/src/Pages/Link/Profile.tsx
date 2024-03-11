import Image from "../../assets/bg-1.3d2a7a2d0a1ed5a6e5b206301d008f80.svg";
function Profile() {
  return (
    <div
      className="justify-center flex items-center bg-[#fff]
    "
      style={{
        backgroundImage: `url(${Image})`,
      }}
    >
      <div className="w-[93%] flex justify-center items-center h-[89vh]">
        <form
          action=""
          className="w-full h-[80vh] bg-[#fff] rounded-md shadow-md"
        >
          Profile
        </form>
      </div>
    </div>
  );
}

export default Profile;

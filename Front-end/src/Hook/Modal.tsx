type propTypes = {
  open: boolean;
  onClose: () => string;
  children: React.ReactNode;
};

const Modal: React.FC<propTypes> = ({ open, onClose, children }) => {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-colors z-50 ${
        open ? "visible bg-black/20  backdrop-blur-sm" : "invisible"
      }`}
      // onClick={onClose}
    >
      <div
        className={`bg-[] rounded-md transition-all flex items-center justify-center w-[93%]
        ${open ? "scale-100 opacity-100" : ""}`}
        onClick={(e) => e.stopPropagation}
      >
        <button
          className="absolute top-0 py-1 px-2 ml-[550px] 
              text-gray-400 hover:text-gray-600 text-2xl flex justify-center items-center max-sm:ml-80"
          onClick={onClose}
        >
          x
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

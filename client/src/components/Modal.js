import React from "react";

const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 overflow-hidden h-[100vh] flex items-center justify-center bg-[rgba(0,0,0,0.6)]">
      <div className="min-w-[550px] px-[25px] min-h-[200px] py-[30px] bg-white rounded-[10px] relative">
        {children}
        <span
          className="absolute inline-flex items-center justify-center top-0 right-0  translate-y-[-50%] bg-black w-[30px] h-[30px] text-white cursor-pointer rounded-[50%] text-[20px] hover:bg-[rgba(0,0,0,0.6)] transition-all"
          onClick={onClose}
        >
          <i className="bx bx-x"></i>
        </span>
      </div>
    </div>
  );
};

export default Modal;

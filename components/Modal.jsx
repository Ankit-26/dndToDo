import React from "react";
import ReactDom from "react-dom";

function Modal({ children, open, onClose, title }) {
  if (!open) return;
  return ReactDom.createPortal(
    <>
      <div
        id="overlay"
        className="fixed bg-black opacity-[0.2] top-0 left-0 right-0 bottom-0"
        onClick={onClose}
      />
      <div
        onClick={e => e.stopPropagation()}
        className="rounded-xl p-4 pb-5 w-[50%] min-h-[45%] bg-white fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 "
      >
        <div className="text-right  flex items-center justify-between ">
          <h1 className="text-slate-gray font-bold text-3xl">{title}</h1>
          <span
            className="text-slate-gray font-normal text-4xl cursor-pointer text-center mr-2"
            onClick={onClose}
          >
            ×
          </span>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default Modal;

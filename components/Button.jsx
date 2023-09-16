import React from "react";

function Button({ title, icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex justify-center items-center gap-2 border-slate-gray border-[1px] rounded-3xl hover:text-slate-gray font-courier text-xl leading-normal py-1 px-5"
    >
      <span className="mt-1">{title}</span>
      {icon && <span className="w-[24] h-[24]  mt-[5px]">{icon}</span>}
    </button>
  );
}

export default Button;

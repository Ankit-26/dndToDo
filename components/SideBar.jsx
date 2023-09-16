import React from "react";
import { todoType } from "@/contants";

function SideBar() {
  return (
    <section className="flex flex-col w-72 px-10 shadow-md">
      <h1 className="text-5xl font-courier font-extrabold leading-normal text-slate-gray">
        todo
      </h1>
      <ul className="flex flex-col gap-5 list-none mt-6">
        {todoType.map((item, index) => (
          <li className="flex justify-start items-center gap-5" key={index}>
            <span
              style={{ backgroundColor: item.color }}
              className={`rounded-full w-[30px] h-[30px] text-center`}
            ></span>
            <span className="text-xl ">{item.label}</span>
          </li>
        ))}
      </ul>
      <img
        className="mt-12 object-contain w-[230px] max-w-lg"
        src="https://media.istockphoto.com/id/1160018579/vector/young-woman-filling-long-paper-note-with-to-do-list-and-giant-pencil-planning-project.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=__qOzQd6Ybwj5BPPFW2PLueLAddIMjRysNYF-xRZQdo="
        alt="icon"
      ></img>
    </section>
  );
}

export default React.memo(SideBar);

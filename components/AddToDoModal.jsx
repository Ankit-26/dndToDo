"use client";

import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import { v4 as uuidv4 } from "uuid";

import { todoType } from "@/contants";
import Button from "./Button";
import { toDosAction } from "@/redux/reducerSlices/toDoSlice";
import { useDispatch, useSelector } from "react-redux";

function AddToDoModal({ open, onClose, selectedToDo = null }) {
  const {
    toDo: { toDos },
  } = useSelector(state => state);
  const [toDoData, setToDoData] = useState({});
  const appDispatch = useDispatch();

  useEffect(() => {
    selectedToDo && setToDoData({ ...selectedToDo });
  }, [selectedToDo]);

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={selectedToDo ? "Edit To DO" : "Add To Do"}
    >
      <>
        <div>
          <label className="text-2xl text-slate-gray" htmlFor="desc">
            Description
          </label>
          <br />
          <textarea
            placeholder="Enter your text here..."
            onResize={() => {}}
            type="text"
            id="desc"
            className=" resize-none p-2 w-full outline outline-[1px] outline-slate-gray focus:outline-[#A1C5E8] mt-2 rounded-lg"
            onChange={e => setToDoData({ ...toDoData, desc: e.target.value })}
            value={toDoData?.desc || ""}
          ></textarea>
        </div>
        <div className="mt-3 ">
          <label className="text-2xl text-slate-gray">Tags</label>
          <ul className="flex gap-4 list-none mt-2 flex-wrap">
            {todoType.map((item, index) => (
              <li
                className="flex justify-start items-center gap-3 cursor-pointer"
                key={index}
                onClick={() => setToDoData({ ...toDoData, type: item })}
              >
                <span
                  style={{ backgroundColor: item.color }}
                  className={`rounded-full w-[30px] h-[30px] text-center ${
                    toDoData?.type?.label == item.label
                      ? "border-zinc-700 border-2"
                      : ""
                  }`}
                ></span>
                <span
                  className={`text-xl ${
                    toDoData?.type?.label == item.label ? "" : "text-slate-gray"
                  }`}
                >
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8 flex gap-2 justify-end">
          <Button title={"Cancel"} onClick={onClose} />
          <Button
            title={"Save"}
            onClick={() => {
              if (selectedToDo) {
                editToDo();
              } else {
                const newToDO = {
                  ...toDoData,
                  id: uuidv4(),
                  isDeleted: false,
                  completed: false,
                };
                if (!newToDO.type) {
                  newToDO.type = { label: "Other", color: "#B3C0EF" };
                }
                appDispatch(toDosAction.addToDo(newToDO));
              }
              onClose();
            }}
          />
        </div>
      </>
    </Modal>
  );

  function editToDo() {
    let updatedToDos = toDos.map(item => {
      if (item.id == selectedToDo.id) {
        const updateToDo = { ...selectedToDo, ...toDoData };
        return updateToDo;
      }
      return item;
    });
    appDispatch(toDosAction.updateToDo(updatedToDos));
  }
}

export default React.memo(AddToDoModal);

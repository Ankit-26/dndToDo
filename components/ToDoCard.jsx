"use client";
import { dndAction } from "@/redux/reducerSlices/dndSlice";
import { toDosAction } from "@/redux/reducerSlices/toDoSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddToDoModal from "./AddToDoModal";

function ToDoCard({ toDo, toDoListStatus }) {
  const {
    toDo: { toDos },
  } = useSelector(state => state);
  const appDispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      {openModal && (
        <AddToDoModal
          open={openModal}
          selectedToDo={toDo}
          onClose={() => setOpenModal(false)}
        />
      )}
      <div
        style={{ backgroundColor: toDo.type.color }}
        id={toDo.id}
        className="p-3 flex items-center justify-between gap-2 rounded-md border-[1.5px] border-slate-400"
        draggable
        onDrag={e => {
          appDispatch(
            dndAction.addDraggingtoDo({ souce: toDoListStatus, id: toDo.id })
          );
        }}
      >
        <p className=" text-slate-gray text-lg break-words">
          {toDoListStatus === "completed" ? <s>{toDo.desc}</s> : toDo.desc}
        </p>
        <div className="flex gap-5  mr-2 ">
          <span onClick={() => setOpenModal(true)} className="cursor-pointer">
            ✏️
          </span>
          <span className="cursor-pointer" onClick={deleteToDo}>
            ❌
          </span>
        </div>
      </div>
    </>
  );

  function deleteToDo() {
    let updatedToDos = toDos.map(item => {
      if (item.id == toDo.id) {
        let isDeleted = true;
        return { ...item, isDeleted: isDeleted };
      }
      return item;
    });
    appDispatch(toDosAction.updateToDo(updatedToDos));
  }
}

export default ToDoCard;

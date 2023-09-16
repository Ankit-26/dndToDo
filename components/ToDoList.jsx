"use client";

import React from "react";
import ToDoCard from "./ToDoCard";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { dndAction } from "@/redux/reducerSlices/dndSlice";
import { toDosAction } from "@/redux/reducerSlices/toDoSlice";

function ToDoList({ completed }) {
  const todoStatus = completed ? "completed" : "pending";
  // const [toDos, setToDos] = useState([...list]);
  const appDispatch = useDispatch();
  const {
    toDo: { toDos },
    dnd,
  } = useSelector(state => state);
  return (
    <div
      id={todoStatus}
      className="mt-5 w-full px-2 h-[72vh] flex flex-col gap-2 pb-7 overflow-y-scroll "
      onDragOver={function (e) {
        e.preventDefault();
      }}
      onDrop={e => {
        updateDroppedToDo();
      }}
    >
      {toDos.length > 0 &&
        toDos
          .filter(
            item => item.completed === completed && item.isDeleted === false
          )
          .map(toDo => (
            <ToDoCard key={toDo.id} toDo={toDo} toDoListStatus={todoStatus} />
          ))}
    </div>
  );

  function updateDroppedToDo(e) {
    let draggedtoDoId = dnd.id;
    if (dnd.source === todoStatus) {
      return;
    }
    let updatedToDos = toDos.map(item => {
      if (item.id == draggedtoDoId) {
        let isCompleted = todoStatus === "completed" ? true : false;
        return { ...item, completed: isCompleted };
      }
      return item;
    });
    appDispatch(toDosAction.updateToDo(updatedToDos));
    appDispatch(dndAction.clearDraggedToDo());
  }
}

export default ToDoList;

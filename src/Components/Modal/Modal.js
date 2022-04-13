import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Modal.module.css";
import { addTask } from "../../Redux/action/listAction";

const Modal = ({ closeModal, content }) => {
  const dispatch = useDispatch();
  const allTask = useSelector((state) => state);
  const [task, setTask] = useState({
    id: allTask.length + 1,
    name: "",
    taskstate: "todo",
  });

  const handelSubmit = () => {
    if (task.name !== "") {
      closeModal(false);
      dispatch(addTask(task));
    } else {
      closeModal(false);
    }
  };
  return (
    <div className={style.backdrop}>
      <div className={style.overlay}>
        <div className={style.header}>{content}</div>
        <div className={style.content}>
          <input
            autoFocus
            type="text"
            onChange={(e) => setTask({ ...task, name: e.target.value })}
          />
        </div>
        <div className={style.footer}>
          <button onClick={handelSubmit}>ok</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

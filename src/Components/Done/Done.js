import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTask } from "../../Redux/action/listAction";
import style from "../Todo/Todo.module.css";
const Done = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  const toDoList = data.filter((ele) => ele.taskstate === "done");
  const viewContent = toDoList.map((ele) => {
    return (
      <p key={ele.id} className={`${style.task} ${style.doneTask}`}>
        {ele.name}
        <span className={style.x} id="del" onClick={(e) => editTask(e, ele.id)}>
          X
        </span>
      </p>
    );
  });

  const editTask = (e, id) => {
    if (e.target.id === "del") {
      const afterFiltter = data.filter((ele) => ele.id !== id);
      dispatch(setTask(afterFiltter));
    } else {
      data.find((ele) => ele.id === id && ((ele.taskstate = "done"), true));
      dispatch(setTask(data));
    }
  };
  return (
    <div className={style.contener}>
      <h3 className={style.header}>done</h3>
      <div className={style.content}>
        {toDoList.length !== 0 ? viewContent : "EMPTY"}
      </div>
    </div>
  );
};

export default Done;

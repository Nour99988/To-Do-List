import React from "react";
import style from "./Todo.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setTask } from "../../Redux/action/listAction";

const ToDo = () => {
  // git add .
  //git commit -m "gfg"
  // git push origin master
  // git deploy
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  const toDoList = data.filter((ele) => ele.taskstate === "todo");
  const viewContent = toDoList.map((ele) => {
    return (
      <p key={ele.id} className={style.task}>
        <span className={style.x} id="del" onClick={(e) => editTask(e, ele.id)}>
          X
        </span>
        {ele.name}
        <span
          className={style.move}
          id="move"
          onClick={(e) => editTask(e, ele.id)}
        >
          M
        </span>
      </p>
    );
  });
  const editTask = (e, id) => {
    if (e.target.id === "del") {
      const afterFiltter = data.filter((ele) => ele.id !== id);
      dispatch(setTask(afterFiltter));
    } else {
      if (data.filter((ele) => ele.taskstate === "inporgress").length < 4) {
        data.find(
          (ele) => ele.id === id && ((ele.taskstate = "inporgress"), true)
        );
        dispatch(setTask(data));
      }
    }
  };
  return (
    <div className={style.contener}>
      <h3 className={style.header}> To do</h3>
      <div className={style.content}>
        {toDoList.length !== 0 ? viewContent : "EMPTY"}
      </div>
    </div>
  );
};

export default ToDo;

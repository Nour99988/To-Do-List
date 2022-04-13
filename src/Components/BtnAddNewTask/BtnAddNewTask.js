import React, { useState } from "react";
import Modal from "../Modal/Modal";
import style from "./Btn.module.css";
const BtnAddNewTask = () => {
  const [promp, setPromp] = useState(false);

  return (
    <div className={style.header}>
      <button onClick={() => setPromp(true)} className={style.btn}>
        New task
      </button>
      {promp && <Modal closeModal={setPromp} content="Enter a new task" />}
    </div>
  );
};

export default BtnAddNewTask;

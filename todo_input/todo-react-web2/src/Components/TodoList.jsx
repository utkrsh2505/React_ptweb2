import React from "react";
import style from "./todo.module.css";
const TodoList = ({ title, status, id }) => {
  console.log(title, status);
  return (
    <div className={style.list}>
      <div>
        <h5>{title}</h5>
      </div>
      <div>
        <p>{status}</p>
      </div>
    </div>
  );
};
export { TodoList };

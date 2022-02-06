import React from "react";
import { useState } from "react";
import style from "./todo.module.css";
const TodoInput = ({ handleAdd }) => {
  const [data, setData] = useState("");
  return (
    <div>
      <input
        className={style.text}
        type="text"
        placeholder="type something"
        value={data}
        onChange={(e) => {
          setData(e.currentTarget.value);
          // console.log(data);
        }}
      />
      <button
        className={style.btn}
        onClick={() => {
          handleAdd(data);
          setData(" ");
        }}
      >
        ADD
      </button>
    </div>
  );
};
export { TodoInput };

import React from "react";
import style from "./Grocery.module.css";
const GroceryList = ({ title, status, id, handleDelete }) => {
  //console.log(title, status);
  return (
    <div className={style.list}>
      <div>
        <h5>{title}</h5>
      </div>
      <div>
        <p>{status}</p>
      </div>

      <div>
        <button className={style.delete} onClick={() => handleDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};
export { GroceryList };

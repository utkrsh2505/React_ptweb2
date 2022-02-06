import React from "react";
import { GroceryInput } from "./GroceryInput";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { GroceryList } from "./GroceryList";
import style from "./Grocery.module.css";
const Grocery = () => {
  const list = [
    {
      title: "wheat",
      status: "False",
      id: 1
    }
  ];
  const [grocery, setGrocery] = useState(list);

  const handleAdd = (title) => {
    if (!title) {
      alert("please add something");
      return;
    }
    const payload = {
      title: title,
      status: "False",
      id: uuid()
    };
    setGrocery([...grocery, payload]);
  };
  //delete
  const handleDelete = (id) => {
    const update = grocery.filter((i) => {
      return i.id !== id;
    });
    setGrocery(update);
  };
  return (
    <>
      <h1>Grocery</h1>
      <GroceryInput handleAdd={handleAdd} />
      <div
        style={{
          margin: "auto",
          display: "flex",
          flexWrap: "wrap",
          width: "600px",
          justifyContent: "evenly"
        }}
      >
        {grocery.map((item) => {
          return (
            <GroceryList
              key={item.id}
              title={item.title}
              status={item.status}
              id={item.id}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
    </>
  );
};
export { Grocery };

import React from "react";
import { useState, useEffect } from "react";
export const Counter = ({ start, end }) => {
  console.log(start, end);
  const [count, setCount] = useState(start);
  useEffect(() => {
    const id = setInterval(() => {
      setCount((prev) => {
        if (count < end) {
          return prev + 1;
        } else {
          clearInterval(id);
          return prev;
        }
      });
    }, 1000);
    return () => clearInterval(id);
  }, [count]);
  return (
    <div>
      <h1>counter</h1>;<h1>{count}</h1>
    </div>
  );
};

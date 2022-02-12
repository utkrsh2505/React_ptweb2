import React from "react";
import { useState } from "react";
const Forms = () => {
  const List = {
    name: "",
    age: "",
    address: "",
    Department: "",
    isMarried: ""
  };
  const [data, setData] = useState(List);
  let filess = React.useRef();
  const handleChange = (e) => {
    let { name, value, type, checked } = e.target;
    if (type == "file") {
      console.log(filess.current.files[0]);
    }
    value = type === "checkbox" ? checked : value;
    setData({
      ...data,
      [name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <>
      <h1>Forms</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={data.name}
          onChange={handleChange}
          type="text"
          placeholder="Type Name"
        />
        <br />
        <br />

        <input
          name="age"
          value={data.age}
          onChange={handleChange}
          type="text"
          placeholder="Type Age"
        />
        <br />
        <br />

        <input
          name="address"
          value={data.address}
          onChange={handleChange}
          type="text"
          placeholder="Type Address"
        />
        <br />
        <br />
        <label>Selelct Department :</label>
        <select
          name="Department"
          value={data.Department}
          onChange={handleChange}
        >
          <option value=""></option>
          <option value="System Engineer">System engineer</option>
          <option value="React Devloper">React Devloper</option>
          <option value="Cloud Engineer">Cloud Engineer</option>
        </select>
        <br />
        <br />
        <label>is married</label>
        <br />
        <input
          name="isMarried"
          type="checkbox"
          checked={data.isMarried}
          onChange={handleChange}
        />
        <label>Yes</label>
        <br />

        <br />
        <input type="file" ref={filess} onChange={handleChange} />
        <br />
        <br />
        <input type="submit" />
      </form>
    </>
  );
};
export { Forms };

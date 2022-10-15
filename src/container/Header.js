import React, { useState } from "react";
import { test } from "../utils/data";

const Header = () => {
  const [data, setData] = useState(test);
  console.log(setData);
  return (
    <div>
      <h2>tag</h2>
      {/* // key => index */}
      {data.map((item, index) => {
        return (
          <div className="container" key={index}>
            <p>{item.name}</p>
            <p>{item.age}</p>
            <p>{item.son.firstson}</p>
            <p>{item.son.grade.school.name}</p>
            <p>{item.son.grade.secondyear.school2.address.phone.tell}</p>
          </div>
        );
      })}
      <hr />
      {/* // key => id */}
      {data.map((item) => {
        const { id, name: na, age: old } = item;
        return (
          <div key={id}>
            <p>{na}</p>
            <p>{old}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Header;

import React from "react";
// import { data } from "../utils/data";
const url = "https://api.github.com/users";

const color = { color: "red", textAlign: "center" };

const Article = () => {
  const [random, setRandom] = React.useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setRandom(data);
  };

  React.useEffect(() => {
    getUsers();
  }, []);

  const removeItem = (id) => {
    let newItem = random.filter((person) => person.id !== id);
    setRandom(newItem);
  };
  return (
    <>
      <hr />
      <hr />
      <h1 style={color}>id</h1>
      {random.map((person) => {
        const { id, avatar_url: image, login: name, html_url: web } = person;
        return (
          <div key={id}>
            <div style={{ display: "flex", gap: "2rem", marginTop: "2rem" }}>
              <img src={image} alt={name} srcset="" style={{ width: "40px" }} />
              <p>{name}</p>
              <p>{web}</p>
            </div>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <hr />
      <h1 style={color}>index</h1>
      {random.map((item, index) => {
        return (
          <div key={index}>
            <p>{item.login}</p>
          </div>
        );
      })}
      <hr />
      <h1 style={color}>props</h1>
      {random.map((person) => {
        return (
          <div key={person.id}>
            <p>{person.login}</p>
          </div>
        );
      })}
      <hr />
      <hr />
    </>
  );
};

export default Article;

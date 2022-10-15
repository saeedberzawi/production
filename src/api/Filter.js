import React, { useState, useEffect } from "react";

// const url = "https://serverless-functions-br.netlify.app/api/3-web";
const url = "https://api-br.netlify.app/api/1-website";

const Filter = () => {
  const [web, setWeb] = useState();
  const [loading, setLoading] = useState(true);
  const getWeb = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      // setWeb(data);
      const newDate = data.website.web;
      setWeb(newDate);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(web);

  useEffect(() => {
    getWeb();
  }, []);

  if (loading) {
    return (
      <div>
        <p>loading...</p>
      </div>
    );
  }

  return (
    <div>
      {web.map((person, index) => {
        return (
          <div key={index}>
            <p>{person.about}</p>
            <p>{person.detail}</p>
            <p>{person.url}</p>
            <img src={person.image.url} alt={person.about} />
          </div>
        );
      })}
    </div>
  );
};

export default Filter;

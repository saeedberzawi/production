import React from "react";

const Main = () => {
  const [error, setError] = React.useState(false);

  return (
    <div>
      <button onClick={() => setError(!error)}>click</button>
      {error && (
        <div>
          <p style={{ color: "red" }}>hello world = &&</p>
        </div>
      )}
      {error ? (
        <p style={{ color: "red" }}>it was an error = ?</p>
      ) : (
        <p style={{ color: "green" }}>no error = :</p>
      )}
      {error || <p style={{ color: "green" }}>ooh = ||</p>}
      <hr />
      <hr />
    </div>
  );
};

export default Main;

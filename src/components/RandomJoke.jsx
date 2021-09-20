import React, { useState, useEffect } from "react";

import { getDadJokes, refreshPage } from "../api";
// import { Link } from "react-router-dom";

function RandomJoke() {
  const [dadJoke, setDadJoke] = useState("");

  useEffect(() => {
    getDadJokes().then((joke) => {
      setDadJoke(joke);
    });
  }, []);

  return (
    <>
      <div className="grid">
        <div className="col joke-container">
          <div className="col heading">
            <h1>Jokes to make your dad proud!</h1>
          </div>
          <div className="col joke">
            <h2>{dadJoke}</h2>
          </div>
          <div className="col center">
            <button onClick={refreshPage}>Gimme another...</button>
          </div>
        </div>
        <br />
      </div>
    </>
  );
}

export default RandomJoke;

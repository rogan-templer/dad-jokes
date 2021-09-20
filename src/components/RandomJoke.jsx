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
      <div>
        <div>
          <h1>Jokes to make your dad proud!</h1>
        </div>
        <div>
          <h2>{dadJoke}</h2>
        </div>
        <div className="center">
          <button onClick={refreshPage}>New Joke Please!</button>
        </div>
        <br />
      </div>
    </>
  );
}

export default RandomJoke;

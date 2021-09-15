import React, { useState, useEffect } from "react";

import { getDadJokes, refreshPage } from "../api";
import { Link, useParams } from "react-router-dom";

function RandomJoke() {
  const [dadJoke, setDadJoke] = useState("");
  const { number } = useParams([]);

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
        <div>
          <button onClick={refreshPage}>New Joke Please!</button>
        </div>
        <br />
        <Link to={{ pathname: `/Search/${number}` }}>More Jokes...</Link>
      </div>
    </>
  );
}

export default RandomJoke;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { listDadJokes } from "../api";
import BackToHome from "./BackToHome";


function SearchJoke() {
  const [jokeList, setJokeList] = useState([]);
  const { number } = useParams();

  useEffect(() => {
    listDadJokes(number).then((joke) => {
      setJokeList(joke);
    });
  }, [number]);



  return (
    <>
      <div>
        <h1>List of Jokes</h1>
      </div>
      <div>
        <ul>
          {jokeList.map((title) => {
            const jokes = title.joke;
            return <li key={title.id}>{jokes}</li>;
          })}
        </ul>
        <BackToHome />
      </div>
    </>
  );
}

export default SearchJoke;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { listDadJokes } from "../api";
import BackToHome from "./BackToHome";
import NextPage from "./NextPage";

function SearchJoke() {
  const [searchJokeList, setSearchJokeList] = useState([]);
  const { number } = useParams();

  useEffect(() => {
    listDadJokes(number).then((joke) => {
      setSearchJokeList(joke);
    });
  }, [number]);

  return (
    <>
      <div>
        <h1>List of Jokes</h1>
      </div>
      <div>
        <NextPage />
      </div>
      <div>
        <ul>
          {searchJokeList.map((title, hehehe) => {
            const jokes = title.joke;
            return <li key={hehehe}>{jokes}</li>;
          })}
        </ul>
        <BackToHome />
      </div>
    </>
  );
}

export default SearchJoke;

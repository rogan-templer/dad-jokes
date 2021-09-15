import React from "react";
import { Route } from "react-router-dom";
import RandomJoke from "./components/RandomJoke";
import JokeList from "./components/JokeList";

function App() {
  return (
    <div>
      <div>
        <Route exact path="/" component={RandomJoke} />
        <Route path="/Jokes/search?page=:number" component={JokeList} />
      </div>
    </div>
  );
}

export default App;

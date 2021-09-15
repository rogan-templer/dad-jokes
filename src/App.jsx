import React from "react";
import { Route } from "react-router-dom";
import RandomJoke from "./components/RandomJoke";
import SearchJoke from "./components/SearchJoke";

function App() {
  return (
    <div>
      <div>
        <Route exact path="/" component={RandomJoke} />
        <Route path="/Jokes" component={SearchJoke} />
      </div>
    </div>
  );
}

export default App;

import React from 'react'
import { Route } from 'react-router-dom'
import RandomJoke from "./components/RandomJoke";
import SearchJoke from './components/SearchJoke';
import NextPage from './components/NextPage';


function App() {
  return (
    <div>
      <div>
        <Route exact path='/' component={RandomJoke} />
        <Route path='/Search' component={SearchJoke} />
        <Route path='/Search?page' component={NextPage} />
      </div>
    </div>
  );
}

export default App;

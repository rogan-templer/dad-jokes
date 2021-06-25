import React, { useState, useEffect } from 'react'

import { listDadJokes } from '../api'
import BackToHome from './BackToHome'


function SearchJoke () {
    const [searchJokeList, setSearchJokeList] = useState([])

    useEffect(() => {
      listDadJokes()
      .then(joke => {
        setSearchJokeList(joke)
      })
    }, [])

    return (
      <>
      <div>
        <h1>List of Jokes</h1>
      </div>
      <div>
        <button>Next Page >> </button>
      </div>
      <div>
        <ul>
        {
          searchJokeList.map((title, hehehe) => {
            const jokes = title.joke
            return (
              <li key={hehehe}>
                {jokes}
              </li>
            )
          })
        }
        </ul>
        <BackToHome />
      </div>
      </>
    )
 }

 export default SearchJoke

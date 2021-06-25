import React, { useState, useEffect } from 'react'

import { searchDadJokes } from '../api'

function SearchJoke () {
    const [searchJokeList, setSearchJokeList] = useState([])

    useEffect(() => {
      searchDadJokes()
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
        <ul>
        {
          searchJokeList.map((title) => {
            const jokes = title.joke
            return (
              <li>
                {jokes}
              </li>
            )
          })
        }
        </ul>
      </div>
      </>
    )
 }

 export default SearchJoke

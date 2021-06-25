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
        <h1>Hi</h1>
      </div>
      <div>
        <ul>
        </ul>
      </div>
      </>
    )
 }

 export default SearchJoke

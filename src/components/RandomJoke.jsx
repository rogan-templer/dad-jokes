import React, { useState, useEffect } from 'react'

import { getDadJokes, refreshPage } from '../api'

function RandomJoke () {
  const [dadJoke, setDadJoke] = useState('')

  useEffect(() => {
    getDadJokes()
    .then(joke => {
      setDadJoke(joke)
    })
  }, [])

  return (
    <>
      <h2>{dadJoke}</h2>
      <button onClick={refreshPage}>New Joke Please!</button>
    </>
  )
}

export default RandomJoke
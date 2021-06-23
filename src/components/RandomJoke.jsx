import React, { useState, useEffect } from 'react'

import { getDadJokes } from '../api'

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
    </>
  )
}

export default RandomJoke
import React, { useState, useEffect } from 'react'

import { nextPage } from '../api'

function NextPage () {
  const [changePage, setChangePage] = useState([])

  useEffect(() => {
    nextPage()
    .then(change => {
      setChangePage(change)
    })
  }, [])

  return (
    <>
    <h1>{changePage}</h1>
    </>
  )
}

export default NextPage
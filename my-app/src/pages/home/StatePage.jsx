import React from 'react'
import { useLocation } from 'react-router-dom'

const StatePage = () => {
  const location = useLocation()

  console.log('Location state: ', location.state?.online)
  console.log('Query Params: ', location.search)

  return (
    <div>
      <h1>
        State:
        {location.state?.online ? 'The user is online' : 'The user is offline'}
      </h1>
    </div>
  )
}

export default StatePage

import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()

  const navigateTo = (path) => {
    navigate(path)
  }

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => navigateTo('/profile')}>Go to Profile</button>
    </div>
  )
}

export default HomePage

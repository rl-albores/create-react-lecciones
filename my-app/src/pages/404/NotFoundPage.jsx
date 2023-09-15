import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
  const navigate = useNavigate()

  const navigateTo = (path) => {
    navigate(path)
  }

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <div>
        <button onClick={() => navigateTo('/')}>Go back to HOME</button>
      </div>
    </div>
  )
}

export default NotFoundPage

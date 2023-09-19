import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProfilePage = ({ user }) => {
  const navigate = useNavigate()

  const navigateTo = (path) => {
    navigate(path)
  }

  const goBack = () => {
    navigate(-1)
  }

  return (
    <div>
      <h1>Profile Page</h1>
      <div>
        <button
          onClick={() => {
            navigateTo('/tasks')
          }}>
          Tasks
        </button>
        <button onClick={goBack}>Go Back</button>
      </div>
    </div>
  )
}

export default ProfilePage

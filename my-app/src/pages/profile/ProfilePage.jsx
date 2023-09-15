import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProfilePage = () => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  return (
    <div>
      <h1>Profile Page</h1>
      <div>
        <button onClick={goBack}>Go Back</button>
      </div>
    </div>
  )
}

export default ProfilePage

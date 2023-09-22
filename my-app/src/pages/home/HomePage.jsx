import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    console.log(location.search)
  })

  console.log('We are in route: ', location.pathname)

  const navigateTo = (path) => {
    navigate(path)
  }

  const navigateProps = (path) => {
    navigate(path, {
      pathname: path,
      search: '?online=true',
      state: { online: true },
    })
  }

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => navigateProps('/online-state')}>
        Go to Page with State / Query Params
      </button>
      <button onClick={() => navigateTo('/profile')}>Go to Profile</button>
    </div>
  )
}

export default HomePage

import React, { useState, useEffect } from 'react'
import {
  getAllUsers,
  getAllPagesUsers,
  getUserDetails,
  login,
} from '../../services/fetchServices'

const FetchExample = () => {
  const [users, setUsers] = useState([])
  const [totalUsers, setTotalUser] = useState(12)
  const [pages, setPages] = useState(2)
  const [usersPerPage, setUserPerPage] = useState(6)
  const [selectedUser, setSelectedUser] = useState({})

  useEffect(() => {
    obtainUsers()
  }, [])

  const obtainUsers = () => {
    getAllUsers()
      .then((response) => {
        console.log('All users', response.data)
        setUsers(response.data)
        setPages(response.total_pages)
        setUserPerPage(response.per_page)
        setTotalUser(response.total)
      })
      .catch((error) => {
        alert(`Error while retreiving the users: ${error}`)
      })
      .finally(() => {
        console.log('Ended obtaining users: ')
        console.table(users)
      })
  }

  const obtainPagesUser = (page) => {
    getAllPagesUsers(page)
      .then((response) => {
        console.log('All pages users', response.data)
        setUsers(response.data)
        setPages(response.total_pages)
        setUserPerPage(response.per_page)
        setTotalUser(response.total)
      })
      .catch((error) => {
        alert(`Error while retreiving the users: ${error}`)
      })
      .finally(() => {
        console.log('Ended obtaining users: ')
        console.table(users)
      })
  }

  const obtainUserDetails = (id) => {
    getUserDetails(id)
      .then((response) => {
        console.log('All pages users', response.data)
        setSelectedUser(response.data)
      })
      .catch((error) => {
        alert(`Error while retreiving the user: ${error}`)
      })
      .finally(() => {
        console.log('Ended obtaining user: ')
        console.table(selectedUser)
      })
  }

  const authUser = () => {
    login('eve.holt@reqres.in', 'cityslicka')
      .then((response) => {
        console.log('TOKEN: ', response.token)
        sessionStorage.setItem('token', response.token)
      })
      .catch((error) => {
        alert(`Error while login user: ${error}`)
      })
      .finally(() => {
        console.log('Ended login user. Navigate to home: ')
      })
  }

  return (
    <div>
      <button onClick={authUser}>Auth User</button>
      <h2>Users: </h2>
      {users.map((user, index) => (
        <p
          key={index}
          onClick={() => obtainUserDetails(user.id)}
          style={{ cursor: 'pointer' }}>
          {user.first_name} {user.last_name}
        </p>
      ))}
      <p>
        Showing {usersPerPage} users of {totalUsers} in total.
      </p>
      <button onClick={() => obtainPagesUser(1)}>1</button>
      <button onClick={() => obtainPagesUser(2)}>2</button>
      <div>
        {selectedUser !== null ? (
          <div>
            <h3>User Details</h3>
            <p>Name: {selectedUser.first_name}</p>
            <p>Last Name: {selectedUser.last_name}</p>
            <p>Email: {selectedUser.email}</p>
            <img
              alt="Avatar"
              src={selectedUser.avatar}
              style={{ height: '150px', width: '150px' }}
            />
          </div>
        ) : (
          <h6>Please click on a User to see its details</h6>
        )}
      </div>
    </div>
  )
}

export default FetchExample

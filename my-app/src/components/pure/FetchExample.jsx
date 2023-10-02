import React, { useState, useEffect } from 'react'
import {
  getAllUsers,
  getAllPagesUsers,
  getUserDetails,
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

  return (
    <div>
      <h2>Users: </h2>
      {users.map((user, index) => (
        <p key={index} onClick={() => obtainUserDetails(user.id)}>
          {user.first_name} {user.last_name}
        </p>
      ))}
      <p>
        Showing {usersPerPage} users of {totalUsers} in total.
      </p>
      <button onClick={() => obtainPagesUser(1)}>1</button>
      <button onClick={() => obtainPagesUser(2)}>2</button>
      <div>
        <h3>User Details</h3>
        {selectedUser && (
          <div>
            <p>{selectedUser.first_name}</p>
            <p>Last Name: {selectedUser.last_name}</p>
            <p>Email: {selectedUser.email}</p>
            <img
              alt="Avatar"
              src={selectedUser.avatar}
              style={{ height: '50px', width: '50px' }}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default FetchExample

import axios from 'axios'

export const login = (email, password) => {
  let body = { email: email, password: password }

  //Returns the response with a promise
  return axios.post('https://reqres.in/api/login', body)
}

//obtener todos los usuarios
export const getAllUsers = () => {
  return axios.get('https://reqres.in/api/users')
}

//obtener todas las paginas de los usuarios
export const getAllPagesUsers = (page) => {
  return axios.get(`https://reqres.in/api/users?page=${page}`)
}

//obtener usuario por ID
export const getUsersByID = (id) => {
  return axios.get(`https://reqres.in/api/users/${id}`)
}

//crear usuario
export const createUser = (name, job) => {
  let body = { name: name, job: job }

  return axios.post('https://reqres.in/api/users', body)
}

//update usuario
export const updateUser = (id, name, job) => {
  let body = { name: name, job: job }

  return axios.put(`https://reqres.in/api/users/${id}`, body)
}

//eliminar usuario por ID
export const deleteUserByID = (id) => {
  return axios.delete(`https://reqres.in/api/users/${id}`)
}

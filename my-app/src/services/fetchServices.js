export const getAllUsers = async () => {
  let response = await fetch('https://reqres.in/api/users')
  // we return the json
  console.log('Response: ', response)
  console.log('Status: ', response.status)
  console.log('Ok? ', response.ok)

  return response.json()
}

export const getAllPagesUsers = async (page) => {
  let response = await fetch(`https://reqres.in/api/users?page=${page}`)
  // we return the json
  console.log('Response: ', response)
  console.log('Status: ', response.status)
  console.log('Ok? ', response.ok)

  return response.json()
}

export const getUserDetails = async (id) => {
  let response = await fetch(`https://reqres.in/api/users/${id}`)
  // we return the json
  console.log('Response: ', response)
  console.log('Status: ', response.status)
  console.log('Ok? ', response.ok)

  return response.json()
}

export const login = async (email, password) => {
  let body = { email: email, password: password }
  let response = await fetch('https://reqres.in/api/login', {
    method: 'POST',
    /* mode: 'no-cors',
    credentials: 'omit',
    cache: 'no-cache',
    headers: { 'Content-type': 'application/json' }, */
    body: JSON.stringify(body),
  })
  console.log('Response Login: ', response)
  console.log('Status: ', response.status)
  console.log('Ok? ', response.ok)
  console.log(response.json)

  return response.json()
}

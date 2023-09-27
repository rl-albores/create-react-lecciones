import React from 'react'

const AsyncExample = () => {
  async function generateNumber() {
    return 1
  }

  async function generatePromiseNumber() {
    return Promise.resolve(2)
  }

  function obtainNumber() {
    generateNumber()
      .then((response) => alert(`Response: ${response}`))
      .catch((error) => alert(`Algo salio mal: ${error}`))
  }

  function obtainPromiseNumber() {
    generatePromiseNumber()
      .then((response) => alert(`Response: ${response}`))
      .catch((error) => alert(`Algo salio mal: ${error}`))
  }

  async function saveSessionStorage(key, value) {
    sessionStorage.setItem(key, value)
    return Promise.resolve(sessionStorage.getItem(key))
  }

  function showStorage() {
    saveSessionStorage('name', 'Ricardo')
      .then((response) => {
        let value = response
        alert(`Saved name: ${value}`)
      })
      .catch((error) => alert(`Algo salio mal: ${error}`))
      .finally(() => console.log('SUCCESS: Name saved a retreived'))
  }

  async function obtainMessage() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve('Hello World'), 2000)
    })
    let message = await promise
    await alert(`Message recived: ${message}`)
  }

  const returnError = async () => {
    await Promise.reject(new Error('Ooops'))
  }

  const consumeError = () => {
    returnError()
      .then((response) => alert(`Everything is OK: ${response}`))
      .catch((error) => alert(`Algo salio mal: ${error}`))
      .finally(() => alert('SUCCESS: Finally executed'))
  }

  const urlNotFound = async () => {
    try {
      let response = await fetch('https://invalidURL.com')
      alert(`Response: ${JSON.stringify(response)}`)
    } catch (error) {
      alert(`Algo salio mal con tu URL: ${error}`)
    }
  }

  const multiplePromises = async () => {
    let results = await Promise.all([
      fetch('https://reqres.in/api/users'),
      fetch('https://reqres.in/api/users?page=2'),
    ]).catch((error) =>
      alert(`Algo salio mal con las URLs: ${error} (checa tu consola)`)
    )
  }

  return (
    <div>
      <h1>Async, Promise Examples</h1>
      <button onClick={obtainNumber}>Obtain number</button>
      <button onClick={obtainPromiseNumber}>Obtain promise number</button>
      <button onClick={showStorage}>Save Name and Show</button>
      <button onClick={obtainMessage}>Received message in 2 seconds</button>
      <button onClick={consumeError}>Obtain error</button>
      <button onClick={urlNotFound}>Request to unknow URL</button>
      <button onClick={multiplePromises}>Mulitples promises</button>
    </div>
  )
}

export default AsyncExample

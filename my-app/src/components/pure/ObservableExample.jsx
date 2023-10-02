import React, { useState } from 'react'
import { getNumbers } from '../../services/observableService'

const ObservableExample = () => {
  const [number, setNumber] = useState(0)

  const obtainNumbers = () => {
    console.log('Subscripcion a Observable')

    getNumbers.subscribe({
      next(newNumber) {
        console.log('New number: ', newNumber)
        setNumber(newNumber)
      },
      error(error) {
        alert(`Algo paso: ${error}`)
        console.log('Error en observable')
      },
      complete() {
        alert(`Finalizado con: ${number}`)
        console.log('Terminado con el observable')
      },
    })

    console.log('Finished receiving numbers')
  }

  return (
    <div>
      <h2>Number: {number}</h2>
      <button onClick={obtainNumbers}>Obtener nuevos numeros</button>
    </div>
  )
}

export default ObservableExample

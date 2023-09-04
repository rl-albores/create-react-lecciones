/* Ejemplo de uso del metodo componentWillUnmount para componente de clase
Ejemplo de uso del hooks para componente funcional
(cuando el componente va a desaparecer) */

import React, { Component, useEffect } from 'react'

export default class WillUnmount extends Component {
  componentWillMount() {
    console.log('Comportamiento antes de que el componente desaparezca')
  }
  render() {
    return (
      <div>
        <h1>WillUnmount</h1>
      </div>
    )
  }
}

export const WillunmountHook = () => {
  useEffect(() => {
    //aqui no ponemos nada
    return () => {
      console.log('Comportamiento antes de que el componente desaparezca')
    }
  }, [])
  return <div>WillUnount</div>
}

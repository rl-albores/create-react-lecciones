/* Ejemplo de uso de ciclo de vida de un componente clase y el hook de ciclo de vida
en un componente funcional */

import React, { Component, useEffect } from 'react'

export class DidMount extends Component {
  componentDidMount() {
    console.log(
      'comportamiento antes de que el componente se añada al DOM (renderice)'
    )
  }
  render() {
    return (
      <div>
        <h1>DidMount</h1>
      </div>
    )
  }
}

export const DidmountHook = () => {
  useEffect(() => {
    console.log(
      'comportamiento antes de que el componente se añada al DOM (renderice)'
    )
  }, [])
  return (
    <div>
      <h1>DidMount</h1>
    </div>
  )
}

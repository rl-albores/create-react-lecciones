/*

Ejemplo Hooks:
-useState()
-useContext()

*/

import React, { useState, useContext } from 'react'

/* @returns Componente 1
dispone de un contexto que va a tener un valor
que recibe desde el padre */

const miContexto = React.createContext(null)

const Componente1 = () => {
  //inicializamos un estado vacio que va a rellenarse con los
  //datos del contexto del padre

  const state = useContext(miContexto)

  return (
    <div>
      <h1>El token es: {state.token}</h1>
      <Componente2 />
    </div>
  )
}

const Componente2 = () => {
  const state = useContext(miContexto)

  return (
    <div>
      <h2>La sesión es: {state.sesion}</h2>
    </div>
  )
}

export default function MiComponenteContexto() {
  const estadoInicial = {
    token: '1234567',
    sesion: 1,
  }

  //creamos el estado de este componente

  const [sesionData, setSesionData] = useState(estadoInicial)

  function actualizarSesion() {
    setSesionData({
      token: 'JMT123456789',
      sesion: sesionData.sesion + 1,
    })
  }

  return (
    <div>
      <miContexto.Provider value={sesionData}>
        {/* Todo lo que este aqui dentro puede leer los datos se sesionData */}
        {/* ademas, si se actualiza, los compoentes de aqui tambien lo actualizan */}
        <h1>Ejemplo de useState() y useContext()</h1>
        <Componente1 />
        <button onClick={actualizarSesion}>Actualizar sesion</button>
      </miContexto.Provider>
    </div>
  )
}

/* EJEMPLO DE USO DEL USESTATE */
/* crear un componente de tipo funcion y acceder a su estado privado
a través de un hook y poder modificarlo */

import React, { useState } from 'react'

const Ejemplo1 = () => {
  /* Valor incial para un contador */

  const valorInicial = 0

  /* valor inicial para una persona */

  const personaInicial = {
    nombre: 'Ricardo',
    email: 'rikardo@rik.com',
  }

  /* El VALORINICIAL y PERSONALINICIAL sean parte del estado del componente para poder
  gestionar su cambio y que este se vea reflejado en la vista del componente */

  const [contador, setContador] = useState(valorInicial)
  const [persona, setPersona] = useState(personaInicial)

  /* funcion para actualizar el estado privado que contiene el contador */

  function incrementarContador() {
    // ? funcionParaCambiar(nuevoValor)
    setContador(contador + 1)
  }

  /*funcion para actualizar el estado de persona en el componente */

  function acutalizarPersona() {
    setPersona({
      nombre: 'Richard',
      email: 'rik@rik.com',
    })
  }

  return (
    <div>
      <h1>Ejemplo de useState() </h1>
      <h2>Contador: {contador}</h2>
      <h2>DATOS DE LA PERSONA:</h2>
      <h3>NOMBRE: {persona.nombre}</h3>
      <h4>EMAIL: {persona.email}</h4>
      {/*bloque de botones para actulizar el estado */}
      <div>
        <button onClick={incrementarContador}>Incrementar contador</button>
        <button onClick={acutalizarPersona}>Actualizar persona</button>
      </div>
    </div>
  )
}

export default Ejemplo1

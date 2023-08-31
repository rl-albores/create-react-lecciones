/*Ejemplo de uso de 

-useState()
-useRef()
-useEffect()

*/

import { useState, useRef, useEffect } from 'react'
import React from 'react'

const Ejemplo2 = () => {
  //Vamos a crear dos contadores distintos
  //cada uno en un estado diferente

  const [contador1, setContador1] = useState(0)
  const [contador2, setContador2] = useState(0)

  //vamos a crear una referencia con useRef() para asociar una variable
  // con un elemento del DOM del componente (vista HTML)

  const miRef = useRef()

  function incrementar1() {
    setContador1(contador1 + 1)
  }

  function incrementar2() {
    setContador2(contador2 + 1)
  }

  //Trabajando con useEffect()
  // ? Caso 1: ejecutar un snippet de codigo
  //cada vez que haya un cambio en el estado del componente
  //se ejecuta aquello que este dentro del useEffect()

  /* useEffect(() => {
    console.log('CAMBIO EN EL ESTADO DEL COMPONENTE')
    console.log('Mostrando referencia al elemento DOM')
    console.log(miRef)
  }) */

  // ? Caso 2: ejecutar solo cuando cambie contador 1
  /* Cada vez que se haya un cambio en contador 1, se ejecuta lo que diga el useEffect()
  En caso de que cambie contador 2, no habra ejecucion */

  /* useEffect(() => {
    console.log('CAMBIO EN EL ESTADO DEL COMPONENTE')
    console.log('Mostrando referencia al elemento DOM')
    console.log(miRef)
  }, [contador1]) */

  // ? Caso 3: ejecutar solo cuando cambie contador 1 o contador 2
  /* Cada vez que se haya un cambio en contador 1, se ejecuta lo que diga el useEffect()
  Cada vez que se haya un cambio en contador 2, se ejecuta lo que diga el useEffect() */

  useEffect(() => {
    console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1 / CONTADOR 2')
    console.log('Mostrando referencia al elemento DOM')
    console.log(miRef)
  }, [contador1, contador2])

  return (
    <div>
      <h1>Ejemplo de useState(), useRef(), useEffect()</h1>
      <h2>CONTADOR 1: {contador1}</h2>
      <h2>CONTADOR 2: {contador2}</h2>
      {/*elemento referenciado */}
      <h4 ref={miRef}>Ejemplo de elemento referenciado</h4>
      <div>
        <button onClick={incrementar1}>Incrementar contador 1</button>
        <button onClick={incrementar2}>Incrementar contador 2</button>
      </div>
    </div>
  )
}

export default Ejemplo2

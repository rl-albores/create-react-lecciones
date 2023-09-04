import React, { useState } from 'react'

//Definiendo estilos en constantes

// ? estilo para usuario logueado

const loggedStyle = {
  color: 'white',
  fontWeight: 'bold',
}

// ? estilo para usuario no logueado

const unloggedStyle = {
  color: 'tomato',
}

const GreetingStyled = (props) => {
  //Generamos un estado para el componente
  // y asi controlar si el usario esta o no logueado

  const [logged, setLogged] = useState(false)

  const greetingUser = () => <p>Hola, {props.name}</p>
  const pleaseLogin = () => <p>Por favor logueate! </p>

  return (
    <div style={logged ? loggedStyle : unloggedStyle}>
      {logged ? greetingUser() : pleaseLogin()}

      <button
        onClick={() => {
          console.log('boton pulsado')
          setLogged(!logged)
        }}>
        {logged ? 'Logout' : 'Login'}
      </button>
    </div>
  )
}

export default GreetingStyled

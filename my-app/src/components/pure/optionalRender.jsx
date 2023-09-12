import React, { useState } from 'react'

// ? estilo para usuario logueado

const loggedStyle = {
  color: 'white',
  backgroundColor: 'green',
  fontWeight: 'bold',
}

// ? estilo para usuario no logueado

const unloggedStyle = {
  color: 'white',
  fontWeight: 'bold',
  backgroundColor: 'tomato',
}

const LoginButton = ({ loginAction, propStyle }) => {
  return (
    <button style={propStyle} onClick={loginAction}>
      Login
    </button>
  )
}

const LogoutButton = ({ logoutAction, propStyle }) => {
  return (
    <button style={propStyle} onClick={logoutAction}>
      Logout
    </button>
  )
}

// ? (Expresion true) && expresion => se renderiza la expresion
// ? (Expresion false) && expresion => no se renderiza la expresion

const OptionalRender = () => {
  const [access, setAccess] = useState(false)
  const [nMessages, setNMessages] = useState(0)

  /* const updateAccess = () => {
    setAccess(!access)
  } */

  const loginAction = () => {
    setAccess(true)
  }

  const logoutAction = () => {
    setAccess(false)
  }

  let optionalButton

  /* if (access) {
    optionalButton = <button onClick={updateAccess}>Logout</button>
  } else {
    optionalButton = <button onClick={updateAccess}>Login</button>
  } */

  if (access) {
    optionalButton = (
      <LogoutButton propStyle={unloggedStyle} logoutAction={logoutAction} />
    )
  } else {
    optionalButton = (
      <LoginButton propStyle={loggedStyle} loginAction={loginAction} />
    )
  }

  //unread mesaages

  let addMessages = () => {
    setNMessages(nMessages + 1)
  }

  return (
    <div>
      {optionalButton}
      {/* {nMessages > 0 && nMessages === 1 && (
        <p>You have {nMessages} new messages ...</p>
      )}
      {nMessages > 1 && <p>You have {nMessages} new messages ...</p>}
      {nMessages === 0 && <p>There are no new messages</p>} */}
      {/* con operador ternario */}
      {access ? (
        <div>
          {nMessages > 0 ? (
            <p>
              You have {nMessages} new message{nMessages > 1 ? 's' : null}
            </p>
          ) : (
            <p>There are no new messages</p>
          )}
          <button onClick={addMessages}>
            {nMessages === 0 ? 'Add your first message' : 'Add new message'}
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default OptionalRender

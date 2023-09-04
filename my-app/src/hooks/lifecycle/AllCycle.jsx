import React, { useEffect } from 'react'

const AllCycle = () => {
  useEffect(() => {
    console.log('el componente creado')

    const intervalID = setInterval(() => {
      document.title = `${new Date()}`
      console.log('actualizacion del componente')
    }, 1000)

    return () => {
      console.log('El componente desaparece')
      document.title = 'tiempo detenido'
      clearInterval(intervalID)
    }
  }, [])

  return <div></div>
}

export default AllCycle

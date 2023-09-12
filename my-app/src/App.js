import './App.css'
/* import OptionalRender from './components/pure/optionalRender' */
/* import Father from './components/container/father' */
/* import GreetingStyled from './components/pure/greetingStyled' */
/* import Ejemplo1 from './hooks/Ejemplo1' */
/* import Ejemplo2 from './hooks/Ejemplo2' */
/* import Ejemplo4 from './hooks/Ejemplo4' */
/* import TaskListComponent from './components/container/task_list' */
import LoginFormik from './components/pure/forms/loginFormik'
/* import Greeting from './components/pure/greeting' */
/* import GreetingF from './components/pure/greetingF' */

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <Greeting name="Ricardo" />
        <GreetingF name="Ricardo" />
        <TaskListComponent />
        <Ejemplo1 />
        <Ejemplo2 />
        <MiComponenteContexto />
        <Ejemplo4 nombre="Ricardito" />
        <h3>Contenido del props.children</h3>
        <GreetingStyled name="Ricardo" />
      </header> */}
      {/** Gestion de eventos */}
      {/* <TaskListComponent /> */}
      {/* <Father /> */}
      {/* Ejemplos de Renderizados condicionales */}
      {/* <OptionalRender /> */}
      {/* Ejemplos de Formik */}
      <LoginFormik />
      {/* PROYECTO FINAL */}
    </div>
  )
}

export default App

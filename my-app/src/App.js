import './App.css'
/* import Ejemplo1 from './hooks/Ejemplo1' */
/* import Ejemplo2 from './hooks/Ejemplo2' */

import Ejemplo4 from './hooks/Ejemplo4'
/* import TaskListComponent from './components/container/task_list' */
/* import Greeting from './components/pure/greeting' */
/* import GreetingF from './components/pure/greetingF' */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Greeting name="Ricardo" />
        <GreetingF name="Ricardo" />
        <TaskListComponent /> */}
        {/* <Ejemplo1 /> */}
        {/* <Ejemplo2 /> */}
        {/* <MiComponenteContexto /> */}
        <Ejemplo4 nombre="Ricardito" />
        <h3>Contenido del props.children</h3>
      </header>
    </div>
  )
}

export default App

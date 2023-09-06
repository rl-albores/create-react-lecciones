import React, { useEffect, useState } from 'react'
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum'
import TaskComponent from '../pure/task'
import '../../styles/task.scss'
import TaskForm from '../pure/forms/taskForm'

const TaskListComponent = () => {
  const defaultTask1 = new Task(
    'Example1',
    'Description 1',
    true,
    LEVELS.NORMAL
  )
  const defaultTask2 = new Task(
    'Example2',
    'Description 2',
    false,
    LEVELS.URGENTE
  )
  const defaultTask3 = new Task(
    'Example3',
    'Description 3',
    false,
    LEVELS.BLOCKING
  )
  //estado del componente
  const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3])
  const [loading, setLoading] = useState(true)

  //control del ciclo de vida del componente
  useEffect(() => {
    console.log('Task State has been modified')
    setLoading(false)
    return () => {
      console.log('TaskList component is going to unmount...')
    }
  }, [tasks])

  const changeCompleted = (id) => {
    console.log('TODO: Cambiar estado de una tarea')
  }

  return (
    <div className="col-12 ">
      <div className="card">
        <div className="card-header p-3">
          <h5>Your Tasks: </h5>
        </div>
        <div
          className="card-body"
          style={{ position: 'relative', height: '400px' }}
          data-mdb-perfect-scroolbar="true">
          <table>
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Priority</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/*TODO: Iterar sobre una lista de tareas */}
              {tasks.map((task, index) => {
                return <TaskComponent key={index} task={task} />
              })}
              {/* <TaskComponent task={defaultTask} /> */}
            </tbody>
          </table>
        </div>
        <TaskForm />
      </div>

      {/* TODO APLICAR UN For/Map para renderizar una lista */}
      {/* <TaskComponent task={defaultTask} /> */}
    </div>
  )
}

export default TaskListComponent

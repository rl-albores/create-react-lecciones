import React, { useEffect, useState } from 'react'
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum'
import TaskComponent from '../pure/task'
import '../../styles/task.scss'

const TaskListComponent = () => {
  const defaultTask = new Task(
    'Example',
    'Default Description',
    false,
    LEVELS.NORMAL
  )
  //estado del componente
  const [tasks, setTasks] = useState([defaultTask])
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
    <div>
      <h1>Your Tasks: </h1>
      {/* TODO APLICAR UN For/Map para renderizar una lista */}
      <TaskComponent task={defaultTask} />
    </div>
  )
}

export default TaskListComponent

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

  function completeTask(task) {
    console.log('completed this task: ', task)
    const indexTask = tasks.indexOf(task)
    const tempTask = [...tasks]
    tempTask[indexTask].completed = !tempTask[indexTask].completed
    //we update the state of the component with the new list of task and it will update the
    //iteration of the tasks in order to show the task updated
    setTasks(tempTask)
  }

  function deleteTask(task) {
    console.log('delete this task: ', task)
    const indexTask = tasks.indexOf(task)
    const tempTask = [...tasks]
    tempTask.splice(indexTask, 1)
    setTasks(tempTask)
  }

  function addTask(task) {
    console.log('add this task: ', task)
    const tempTask = [...tasks]
    tempTask.push(task)
    setTasks(tempTask)
  }

  const Table = () => {
    return (
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
            return (
              <TaskComponent
                key={index}
                task={task}
                complete={completeTask}
                remove={deleteTask}
              />
            )
          })}
          {/* <TaskComponent task={defaultTask} /> */}
        </tbody>
      </table>
    )
  }

  let tasksTable = <Table />

  if (tasks.length > 0) {
    tasksTable = <Table />
  } else {
    tasksTable = (
      <div>
        <h3>There are no tasks to show</h3>
        <h4>Please, create one.</h4>
      </div>
    )
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
          {tasksTable}
        </div>
      </div>
      <TaskForm add={addTask} />
      {/* TODO APLICAR UN For/Map para renderizar una lista */}
      {/* <TaskComponent task={defaultTask} /> */}
    </div>
  )
}

export default TaskListComponent

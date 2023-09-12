import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'
import '../../styles/task.scss'
import { LEVELS } from '../../models/levels.enum'

const TaskComponent = ({ task, complete, remove }) => {
  useEffect(() => {
    console.log('Create Taks')
    return () => {
      console.log(`Task: ${task.name} is going to unmount`)
    }
  }, [task])

  //Funcion que retorna Badge dependiendo el nivel del Task

  function taskLevelBadge() {
    switch (task.level) {
      case LEVELS.NORMAL:
        return (
          <h6 className="mb-0">
            <span className="badge bg-primary">{task.level}</span>
          </h6>
        )

      case LEVELS.URGENTE:
        return (
          <h6 className="mb-0">
            <span className="badge bg-warning">{task.level}</span>
          </h6>
        )

      case LEVELS.BLOCKING:
        return (
          <h6 className="mb-0">
            <span className="badge bg-danger">{task.level}</span>
          </h6>
        )

      default:
        break
    }
  }

  function taskCompletedIcon() {
    if (task.completed) {
      return (
        <i
          onClick={() => complete(task)}
          className="bi-toggle-on task-action"
          style={{ color: 'green' }}></i>
      )
    } else {
      return (
        <i
          onClick={() => complete(task)}
          className="bi-toggle-off task-action"
          style={{ color: 'grey' }}></i>
      )
    }
  }

  return (
    <tr
      className={
        task.completed ? 'fw-normal task-completed' : 'fw-normal task-pending'
      }>
      <th>
        <span className="ms-2">{task.name}</span>
      </th>
      <td>
        <span className="align-middle">{task.description}</span>
      </td>
      <td className="align-middle">
        <span>{taskLevelBadge()}</span>
      </td>
      <td className="align-middle">
        {taskCompletedIcon()}
        <i
          className="bi-trash task-action"
          style={{ color: 'tomato' }}
          onClick={() => remove(task)}></i>
      </td>
    </tr>
  )
}

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
  complete: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
}

export default TaskComponent

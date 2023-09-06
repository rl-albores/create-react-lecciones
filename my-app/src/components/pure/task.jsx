import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'
import '../../styles/task.scss'
import { LEVELS } from '../../models/levels.enum'

const TaskComponent = ({ task }) => {
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

  return (
    <tr className="fw-normal">
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
        {task.completed ? (
          <i className="bi-toggle-on" style={{ color: 'green' }}></i>
        ) : (
          <i className="bi-toggle-off" style={{ color: 'grey' }}></i>
        )}
        <i className="bi-trash" style={{ color: 'tomato' }}></i>
      </td>
    </tr>
  )
}

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
}

export default TaskComponent

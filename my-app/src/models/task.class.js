import { LEVELS } from './levels.enum'

export class Task {
  name = ''
  descripcion = ''
  completado = false
  level = LEVELS.NORMAL

  constructor(name, description, completed, level) {
    this.name = name
    this.description = description
    this.compmleted = completed
    this.level = level
  }
}

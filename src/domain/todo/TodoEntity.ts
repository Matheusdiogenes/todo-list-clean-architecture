import crypto from 'crypto'
import { TodoInput, TodoOutput } from '../todo/TodoPayload'

export class TodoEntity {
  readonly id: string
  readonly idUser: string
  name: string
  description: string
  status: boolean

  constructor(payload: TodoInput, id?: string) {
    this.id = id || crypto.randomUUID()
    this.idUser = payload.idUser
    this.name = payload.name
    this.description = payload.description
    this.status = false
  }

  static create(payload: TodoInput, id?: string) {
    return new TodoEntity(payload, id)
  }

  updateStatus(status: boolean) {
    this.status = status
  }

  toJSON(): TodoOutput {
    return {
      id: this.id,
      idUser: this.idUser,
      name: this.name,
      description: this.description,
      status: this.status
    }
  }
}
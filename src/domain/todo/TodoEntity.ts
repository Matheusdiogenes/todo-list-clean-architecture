import crypto from 'crypto'
import { TodoPayloadInput } from '../todo/TodoPayload'

export class TodoEntity {
  readonly id: string
  readonly idUser: string
  name: string
  description: string
  status?: boolean

  constructor(payload: TodoPayloadInput) {
    this.id = payload.id || crypto.randomUUID()
    this.idUser = payload.idUser
    this.name = payload.name
    this.description = payload.description
    this.status = payload.status || false
  }  

  static create(payload: TodoPayloadInput) {
    return new TodoEntity(payload)
  }

  updateStatus(status: boolean) {
    this.status = status
  }
}
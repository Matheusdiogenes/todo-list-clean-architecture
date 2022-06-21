import crypto from 'crypto'
import { TodoEntity } from '../todo'
import { UserPayload } from "../user"

export class UserEntity {
  readonly id: string
  name: string
  username: string
  email: string
  password: string
  todos?: TodoEntity[]

  constructor(payload: UserPayload, id?: string) {
    this.id = id || crypto.randomUUID()
    this.name = payload.name
    this.email = payload.email
    this.username = payload.username
    this.password = payload.password
    this.todos = []
  }
}
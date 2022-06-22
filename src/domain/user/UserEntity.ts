import crypto from 'crypto'
import { TodoPayloadOutput } from '../todo'
import { CreateUserInput, UpdateUserInput } from '../user'

export class UserEntity {
  readonly id: string
  name: string
  username: string
  email: string
  password: string
  todos?: TodoPayloadOutput[]

  constructor(payload: CreateUserInput, id?: string) {
    this.id = id || crypto.randomUUID()
    this.name = payload.name
    this.email = payload.email
    this.username = payload.username
    this.password = payload.password
    this.todos = []
  }

  updateUser(updateData: UpdateUserInput) {
    this.name = updateData.name || this.name
    this.username = updateData.username || this.username
    this.email = updateData.email || this.email
    this.password = updateData.password || this.password
  }

}
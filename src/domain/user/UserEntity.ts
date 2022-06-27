import { randomUUID } from 'crypto'
import { UserInput, UserOutput } from '../user'

export class UserEntity {
  readonly id: string
  name: string
  username: string
  email: string
  password: string

  constructor(payload: UserInput, id?: string) {
    this.id = id || randomUUID()
    this.name = payload.name
    this.email = payload.email
    this.username = payload.username
    this.password = payload.password
  }

  toJSON(): UserOutput {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password,
    }
  }

}
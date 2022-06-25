import crypto from 'crypto'
import { CreateUserInput } from '../user'
// teste
export class UserEntity {
  readonly id: string
  name: string
  username: string
  email: string
  password: string
  
  constructor(payload: CreateUserInput, id?: string) {
    this.id = id || crypto.randomUUID()
    this.name = payload.name
    this.email = payload.email
    this.username = payload.username
    this.password = payload.password  
  }

}
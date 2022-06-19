import { TodoPayload } from "../todo/type"
import { UserPayload } from "./type"

export class UserEntity {
  name: string
  username: string
  email: string
  password: string
  tasks?: TodoPayload[]

  private constructor(payload: UserPayload) {
    this.name = payload.name
    this.email = payload.email
    this.username = payload.username
    this.password = payload.password
    this.tasks = []
  }

  static create(userData: UserPayload): UserPayload {
    return new UserEntity(userData)
  }

  static validator(userData: UserPayload) {
    if (userData.name.length === 0) {
      return new Error('name invalid')
    }

    if (userData.email.length === 0) {
      return new Error('email invalid')
    }

    if (userData.username.length === 0) {
      return new Error('username invalid')
    }
    
    if (userData.password.length === 0) {
      return new Error('password invalid')
    }
    return 0
  }

}
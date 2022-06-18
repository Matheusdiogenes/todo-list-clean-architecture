import { TaskPayload, UserPayload } from "./type"

export class UserEntity {
  name: string
  username: string
  email: string
  password: string
  tasks?: TaskPayload[]

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

}
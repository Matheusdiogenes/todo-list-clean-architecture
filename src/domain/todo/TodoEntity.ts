export class TodoEntity {
  id?: string
  name: string
  description: string
  status?: boolean
  

  private constructor(payload: TodoEntity) {
    this.name = payload.name
    this.description = payload.description
    this.status = false
  }

  static create(userData: TodoEntity): TodoEntity {
    return new TodoEntity(userData)
  }

  static validator(userData: TodoEntity) {
    if (userData.name.length === 0) {
      return new Error('name invalid')
    }

    if (userData.description.length === 0) {
      return new Error('description invalid')
    }
    return 0
  }

}
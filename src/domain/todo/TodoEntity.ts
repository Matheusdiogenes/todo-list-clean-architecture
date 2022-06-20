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
}
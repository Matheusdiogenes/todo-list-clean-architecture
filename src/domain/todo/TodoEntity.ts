import crypto from 'crypto'

export class TodoEntity {
  readonly id?: string
  name: string
  description: string
  status?: boolean
  
  constructor(payload: TodoEntity, id?: string) {
    this.id = id || crypto.randomUUID()
    this.name = payload.name
    this.description = payload.description
    this.status = false
  }
}
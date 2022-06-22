import crypto from 'crypto'

export class TodoEntity {
  readonly id?: string
  readonly idUser: string
  name: string
  description: string
  status?: boolean
  
  constructor(payload: TodoEntity, idUser: string, id?: string, ) {
    this.id = id || crypto.randomUUID()
    this.idUser = idUser
    this.name = payload.name
    this.description = payload.description
    this.status = false
  }
}
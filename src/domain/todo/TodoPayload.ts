export type TodoPayloadInput = {
  id?: string
  idUser: string
  name: string
  description: string  
  status?: boolean
}

export type UpdateTodoPayload = {
  name?: string
  description?: string  
  status?: boolean
}
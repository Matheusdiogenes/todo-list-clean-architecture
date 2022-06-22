export type TodoPayload = {
  idUser: string
  name: string
  description: string  
}

export type TodoPayloadOutput = {
  id: string
  idUser: string
  name: string
  description: string  
  status: boolean
}

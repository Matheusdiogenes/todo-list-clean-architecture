export type TodoPayloadInput = {
  idUser: string
  name: string
  description: string  
}

export type TodoPayloadOutput = TodoPayloadInput & {
  id: string  
  status: boolean
}

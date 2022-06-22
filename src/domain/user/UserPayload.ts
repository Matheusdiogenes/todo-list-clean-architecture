export type TodoPayload = {
  name: string
  description: string
  status?: boolean
}

export type CreateUserInput = {
  name: string
  username: string
  email: string
  password: string
}

export type TodoPayload = {
  name: string
  description: string
  status?: boolean
}

export type UserPayload = {
  name: string
  username: string
  email: string
  password: string
  todos?: TodoPayload[]
}

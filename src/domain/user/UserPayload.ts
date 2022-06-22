import { TodoPayloadOutput } from "../todo"

export type CreateUserInput = {
  name: string
  username: string
  email: string
  password: string
}

export type UpdateUserInput = {
  name?: string
  username?: string
  email?: string
  password?: string
}

export type CreateUserOutput = CreateUserInput & {
  id: string
  todos: TodoPayloadOutput[]
}

export type CreateUserInput = {
  id?: string
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
}

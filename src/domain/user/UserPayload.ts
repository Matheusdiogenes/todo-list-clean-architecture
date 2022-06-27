export type UserInput = {  
  name: string
  username: string
  email: string
  password: string
}

export type UserUpdate = {
  name?: string
  username?: string
  email?: string
  password?: string
}

export type UserOutput = UserInput & {
  id: string 
}

import { CreateUserOutput, UpdateUserInput } from "./UserPayload"

export const updateUser = (user: CreateUserOutput | undefined, userData: UpdateUserInput) => {
  if(!user){
    return new Error('No data received')
  }
  const userUpdated: CreateUserOutput = {
    id: user.id,
    email: userData.email || user.email,
    name: userData.name || user.name,
    username: userData.username || user.username,
    password: userData.password || user.password,
  }
  return userUpdated
}
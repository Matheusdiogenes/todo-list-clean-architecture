import { CreateUserInput, CreateUserOutput, UpdateUserInput } from "."

export interface IUserRepository {
  create(userCreate: CreateUserInput): Promise<CreateUserOutput>
  update(userUpdate: UpdateUserInput): Promise<void>
}
import { CreateUserInput } from "."

export interface IUserRepository {
  create(user: CreateUserInput): Promise<void>
}
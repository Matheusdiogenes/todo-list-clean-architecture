import { UserPayload } from "."

export interface IUserRepository {
  create(user: UserPayload): Promise<void>
}
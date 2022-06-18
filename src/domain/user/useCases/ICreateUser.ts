import { UserPayload } from "../type";

export interface ICreateUser {
  create(user: UserPayload): Promise<UserPayload>
}
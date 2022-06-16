import { User } from "./user.entity";

export interface IUserRepository {
  insert(user: User): Promise<User>
  findAll(): Promise<User[]>
}
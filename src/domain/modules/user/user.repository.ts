import { TodoEntity } from "../todo/todo.entity";
import { UserEntity } from "./user.entity";

export interface IUserRepository {
  insert(user: UserEntity): Promise<UserEntity>
  updateTask(Todo: TodoEntity): Promise<TodoEntity>
  findAll(): Promise<UserEntity[]>
}
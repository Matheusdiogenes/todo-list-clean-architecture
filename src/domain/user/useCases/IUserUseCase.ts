import { TodoPayload } from "../../todo/type";
import { UserPayload } from "../type";

export interface ICreateUser {
  save(user: UserPayload): Promise<UserPayload>
  addTask(task: TodoPayload): Promise<TodoPayload>
}
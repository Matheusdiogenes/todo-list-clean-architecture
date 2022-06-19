import { TaskPayload, UserPayload } from "../type";

export interface ICreateUser {
  save(user: UserPayload): Promise<UserPayload>
  addTask(task: TaskPayload): Promise<TaskPayload>
}
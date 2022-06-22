import { TodoEntity, TodoPayload } from '.'

export interface ITodoRepository {
  save(todoPayload: TodoPayload): Promise<void>
  findAll(): Promise<TodoEntity[]>
}
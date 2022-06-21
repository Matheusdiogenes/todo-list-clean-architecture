import { TodoEntity, TodoPayload } from '.'

export interface ITodoUseCase {
  save(todoPayload: TodoPayload): Promise<void>
  findAll(): Promise<TodoEntity[]>
}
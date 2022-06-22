import { TodoPayload, TodoPayloadOutput } from '.'

export interface ITodoRepository {
  save(todoPayload: TodoPayload): Promise<void>
  findAll(): Promise<TodoPayloadOutput[]>
}
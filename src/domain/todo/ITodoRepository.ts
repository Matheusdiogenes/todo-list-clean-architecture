import { TodoPayloadInput, TodoEntity  } from '../todo'

export interface ITodoRepository {
  save(TodoPayloadInput: TodoPayloadInput): Promise<TodoEntity>
  findAll(): Promise<TodoEntity[]>
}
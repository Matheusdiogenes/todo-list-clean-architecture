import { TodoPayloadInput, TodoEntity } from '../todo'

export interface ITodoRepository {
  save(TodoPayloadInput: TodoPayloadInput): Promise<TodoEntity>
  updateStatus(id: string, status: boolean): Promise<TodoEntity>  
  findOne(id: string): Promise<TodoEntity>
  findAll(): Promise<TodoEntity[]>
  delete(id: string): Promise<void>
}
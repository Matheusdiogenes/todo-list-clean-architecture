import { TodoPayloadInput, TodoEntity, UpdateTodoPayload  } from '../todo'

export interface ITodoRepository {
  save(TodoPayloadInput: TodoPayloadInput): Promise<TodoEntity>
  updateStatus(id: string, status: boolean): Promise<TodoEntity>  
  findOne(id: string): Promise<TodoEntity>
  findAll(): Promise<TodoEntity[]>
}
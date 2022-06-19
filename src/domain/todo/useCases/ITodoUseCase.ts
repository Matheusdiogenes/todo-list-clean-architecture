import { TodoPayload } from '../type'

export interface ITodoUseCase {
  save(todoPayload: TodoPayload): Promise<TodoPayload>
}
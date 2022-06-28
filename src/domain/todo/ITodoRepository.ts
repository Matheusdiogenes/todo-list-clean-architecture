import { TodoInput, TodoOutput } from '../todo'

export interface ITodoRepository {
  save(TodoInput: TodoInput, id?: string): Promise<TodoOutput>
  update(id: string, status: boolean): Promise<TodoOutput>  
  findOne(id: string): Promise<TodoOutput>
  findAll(idUser: string): Promise<TodoOutput[]>
  delete(id: string): Promise<void>
}
import { TodoInput, TodoOutput } from '../todo'

export interface ITodoRepository {
  save(TodoInput: TodoInput): Promise<TodoOutput>
  update(idUser: string, id: string, status: boolean): Promise<TodoOutput>  
  findOne(idUser: string, id: string): Promise<TodoOutput>
  findAll(idUser: string): Promise<TodoOutput[]>
  delete(idUser: string, id: string): Promise<void>
}
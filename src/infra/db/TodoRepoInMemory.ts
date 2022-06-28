import { ITodoRepository, TodoEntity, TodoInput, TodoOutput } from '../../domain/todo'

export class TodoRepoInMemory implements ITodoRepository {

  todos: TodoOutput[] = []

  constructor(todoslist?: TodoOutput[]) {
    this.todos = todoslist || []
  }

  async save(todoData: TodoInput, id?: string): Promise<TodoOutput> {
    const todo = new TodoEntity(todoData, id).toJSON()
    this.todos.push(todo)
    return todo
  }

  async findAll(idUser: string): Promise<TodoOutput[]> {
    const todos = this.todos.filter(t => t.idUser === idUser)
    return todos
  }

  async findOne( id: string): Promise<TodoOutput> {
    const todo = this.todos.find(t => t.id === id)
    if (!todo) {
      throw new Error('Todo not found.')
    }
    return todo
  }

  async update(id: string, status: boolean): Promise<TodoOutput> {
    const find = this.todos.find(t => t.id === id)

    if (!find) {
      throw new Error('Todo not found.')
    }

    const todoEntity = TodoEntity.create(find, find.id)

    todoEntity.updateStatus(status)

    this.todos = this.todos.filter(t => t.id !== id)
    this.todos.push(todoEntity.toJSON())

    return todoEntity
  }

  async delete(id: string): Promise<void> {
    this.todos = this.todos.filter(t => t.id !== id)    
    return 
  }

}
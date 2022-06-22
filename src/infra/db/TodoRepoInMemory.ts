import { ITodoRepository, TodoEntity, TodoPayloadInput } from '../../domain/todo'

export class TodoRepoInMemory implements ITodoRepository{
  
  todos: TodoEntity[] = []

  constructor (todoslist?: TodoEntity[]) {
    this.todos = todoslist || []
  }

  async save(todoData: TodoPayloadInput): Promise<TodoEntity> {
    const todo = new TodoEntity(todoData)
    this.todos.push(todoData)  
    return todo
  }

  async findAll(): Promise<TodoEntity[]> {
    return this.todos
  }
}
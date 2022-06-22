import { ITodoRepository, TodoEntity } from "../../domain/todo"

export class TodoRepoInMemory implements ITodoRepository{
  
  todos: TodoEntity[] = []

  constructor (todoslist?: TodoEntity[]) {
    this.todos = todoslist || []
  }

  async save(user: TodoEntity): Promise<void> {
    this.todos.push(user)  
  }

  async findAll(): Promise<TodoEntity[]> {
    return this.todos
  }
}
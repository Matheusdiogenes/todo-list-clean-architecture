import { ITodoRepository, TodoEntity, TodoPayloadInput } from '../../domain/todo'

export class TodoRepoInMemory implements ITodoRepository {

  todos: TodoEntity[] = []

  constructor(todoslist?: TodoEntity[]) {
    this.todos = todoslist || []
  }

  async save(todoData: TodoPayloadInput): Promise<TodoEntity> {
    const todo = new TodoEntity(todoData)
    this.todos.push(todo)
    return todo
  }

  async findAll(): Promise<TodoEntity[]> {
    return this.todos
  }

  async findOne(id: string): Promise<TodoEntity> {
    const todo = this.todos.find(t => t.id === id)
    if (!todo) {
      throw new Error('Todo not found.')
    }
    return todo
  }

  async updateStatus(id: string, status: boolean): Promise<TodoEntity> {
    const find = this.todos.find(t => t.id === id)

    if (!find) {
      throw new Error('Todo not found.')
    }
    const todo: TodoPayloadInput = {
      id: find.id,
      idUser: find.idUser,
      name: find.name,
      description: find.description,
      status: find.status
    }
    const todoEntity = TodoEntity.create(todo)
    todoEntity.updateStatus(status || !find.status)

    this.todos = this.todos.filter(t => t.id !== id)
    this.todos.push(todoEntity)

    return todoEntity
  }

}
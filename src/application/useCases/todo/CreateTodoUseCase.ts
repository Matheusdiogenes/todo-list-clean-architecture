import { ITodoRepository, TodoEntity, TodoInput, TodoOutput } from "../../../domain/todo";

export class CreateTodoUseCase {
  constructor(private todoRepo: ITodoRepository) { }

  async exec(TodoInput: TodoInput, id?: string): Promise<TodoOutput> {
    const todo = new TodoEntity(TodoInput, id).toJSON()
    await this.todoRepo.save(todo, todo.id)
    return todo
  }
}

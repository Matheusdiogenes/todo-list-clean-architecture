import { ITodoRepository, TodoEntity, TodoPayload } from "../domain/todo";

export class CreateTodoUseCase {
  constructor(private todoRepo: ITodoRepository) { }

  async exec(todoPayload: TodoPayload, idUser: string): Promise<TodoEntity> {
    const todo = new TodoEntity(todoPayload, idUser)
    await this.todoRepo.save(todoPayload)
    return todo
  }
}

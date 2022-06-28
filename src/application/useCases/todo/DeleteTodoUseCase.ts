import { ITodoRepository } from "../../../domain/todo"

export class DeleteTodoUseCase {
  constructor(private todoRepo: ITodoRepository) { }

  async exec(id: string) {
    const todo = await this.todoRepo.delete(id)
    return todo
  }
}

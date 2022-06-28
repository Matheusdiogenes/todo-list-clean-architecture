import { ITodoRepository } from "../../../domain/todo"

export class UpdateTodoUseCase {
  constructor(private todoRepo: ITodoRepository) { }

  async exec(id: string, status: boolean) {
    const todo = await this.todoRepo.update( id, status)
    return todo
  }
}

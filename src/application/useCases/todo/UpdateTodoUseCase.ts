import { ITodoRepository } from "../../../domain/todo"

export class UpdateTodoUseCase {
  constructor(private todoRepo: ITodoRepository) { }

  async exec(idUser: string, id: string, status: boolean) {
    const todo = await this.todoRepo.update(idUser, id, status)
    return todo
  }
}

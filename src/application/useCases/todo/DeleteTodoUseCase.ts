import { ITodoRepository } from "../../../domain/todo"

export class DeleteTodoUseCase {
  constructor(private todoRepo: ITodoRepository) { }

  async exec(idUser: string, id: string) {
    const todo = await this.todoRepo.delete(idUser, id)
    return todo
  }
}

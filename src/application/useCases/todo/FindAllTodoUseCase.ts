import { ITodoRepository } from "../../../domain/todo"

export class FindAllTodoUseCase {
  constructor(private todoRepo: ITodoRepository) { }

  async exec(idUser: string) {
    const todo = await this.todoRepo.findAll(idUser)
    return todo
  }
}

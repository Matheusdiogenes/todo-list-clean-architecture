import { ITodoRepository, TodoEntity, TodoPayloadInput } from "../../../domain/todo";

export class CreateTodoUseCase {
  constructor(private todoRepo: ITodoRepository) { }

  async exec(TodoPayloadInput: TodoPayloadInput, idUser: string){
    const todo = new TodoEntity(TodoPayloadInput, idUser)
    await this.todoRepo.save(TodoPayloadInput)
    return todo
  }
}

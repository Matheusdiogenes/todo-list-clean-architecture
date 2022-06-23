import { ITodoRepository, TodoEntity, TodoPayloadInput } from "../../../domain/todo";

export class CreateTodoUseCase {
  constructor(private todoRepo: ITodoRepository) { }

  async exec(TodoPayloadInput: TodoPayloadInput){
    const todo = new TodoEntity(TodoPayloadInput)
    await this.todoRepo.save(TodoPayloadInput)
    return todo
  }
}

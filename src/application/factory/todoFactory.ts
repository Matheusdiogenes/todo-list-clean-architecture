import { CreateTodoUseCase, DeleteTodoUseCase, FindAllTodoUseCase, UpdateTodoUseCase } from "../useCases/todo"

export const todoFactory = (repository: any) => {
  return {
    create: new CreateTodoUseCase(repository),
    findAll: new FindAllTodoUseCase(repository),
    update: new UpdateTodoUseCase(repository),
    delete: new DeleteTodoUseCase(repository)
  }
}
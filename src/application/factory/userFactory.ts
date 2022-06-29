import { CreateUserUseCase, FindAllUserUseCase, FindOneUserUseCase } from "../useCases/user"

export const userFactory = (repository: any) => {
  return {
    create: new CreateUserUseCase(repository),
    findOne: new FindOneUserUseCase(repository),
    findAll: new FindAllUserUseCase(repository)
  }
}
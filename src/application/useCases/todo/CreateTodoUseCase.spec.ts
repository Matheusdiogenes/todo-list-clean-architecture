import { randomUUID } from 'crypto'
import { TodoInput, } from "../../../domain/todo/"
import { TodoRepoInMemory } from "../../../infra/db/"
import { CreateTodoUseCase } from "./CreateTodoUseCase"

describe('CreateTodoUseCase Test', () => {

  it('should insert a new todo', async () => {
    const idUser = randomUUID()
    const idTodo = randomUUID()

    const user = {
      id: idUser,
      name: 'user2',
      username: 'any_user',
      email: 'user2@email.com',
      password: '123456',
    }

    const repositoryTodo = new TodoRepoInMemory()
    const createTodoUseCase = new CreateTodoUseCase(repositoryTodo)
    const todoData: TodoInput = {
      idUser: user.id,
      name: 'task 1',
      description: 'task 1 description'
    }

    const expected = await createTodoUseCase.exec(todoData, idTodo)

    expect(expected.id).toEqual(idTodo)
    expect(expected.idUser).toEqual(idUser)
    expect(expected.name).toEqual(todoData.name)
    expect(expected.description).toEqual(todoData.description)
    expect(expected.status).toEqual(false)

  })
})
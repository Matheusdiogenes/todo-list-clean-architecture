import { randomUUID } from 'crypto'
import { TodoEntity, TodoPayload } from "../../domain/todo"
import { TodoRepoInMemory } from "./TodoRepoInMemory"

describe('UserRepoInMemory Test', () => {

  it('should insert a new todo', async () => {
    const userRepoInMemory = new TodoRepoInMemory()
    const idUser = randomUUID()

    const todoData: TodoPayload = {
      idUser,
      name: "task 1",
      description: 'description task 1'
    }

    const todo = new TodoEntity(todoData, idUser)

    await userRepoInMemory.save(todo)

    expect(todo.id).toBeDefined();
    expect(todo.idUser).toBeDefined();
    expect(todo.name).toEqual(todoData.name)
    expect(todo.description).toEqual(todoData.description)

  })
})
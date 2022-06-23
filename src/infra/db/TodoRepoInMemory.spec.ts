import { randomUUID } from 'crypto'
import { TodoEntity, TodoPayloadInput } from '../../domain/todo/'
import { TodoRepoInMemory } from "../../infra/db/"

describe('UserRepoInMemory Test', () => {

  it('should insert a new todo', async () => {
    const todoRepoInMemory = new TodoRepoInMemory()    

    const todoData: TodoPayloadInput = {
      id: randomUUID(),
      idUser: randomUUID(),
      name: "task 1",
      description: 'description task 1'
    }

    const todo = TodoEntity.create(todoData)

    await todoRepoInMemory.save(todo)

    expect(todo.id).toBeDefined();
    expect(todo.idUser).toBeDefined();
    expect(todo.name).toEqual(todoData.name)
    expect(todo.description).toEqual(todoData.description)
  })

  it('should find a todo', async () => {

    const todoData: TodoPayloadInput = {
      idUser: randomUUID(),
      id: randomUUID(),
      name: 'task 2',
      description: 'task 2 description'
    }

    const todoEntity = TodoEntity.create(todoData)
    const todoRepoInMemory = new TodoRepoInMemory([todoEntity])
    
    const todo = await todoRepoInMemory.findOne(todoEntity.id)    
    
    expect(todo.id).toEqual(todoData.id);
    expect(todo.idUser).toEqual(todoData.idUser);
    expect(todo.name).toEqual(todoData.name)
    expect(todo.description).toEqual(todoData.description)
    expect(todo.status).toEqual(false)
  })

  it('should update todo status', async () => {

    const todoData: TodoPayloadInput = {
      id: randomUUID(),
      idUser: randomUUID(),
      name: 'task 2',
      description: 'task 2 description'
    }

    const todoEntity = TodoEntity.create(todoData)
    const todoRepoInMemory = new TodoRepoInMemory([todoEntity])
    
    const todo = await todoRepoInMemory.updateStatus(todoData.id!, true)    
    
    expect(todo.id).toEqual(todoData.id);
    expect(todo.idUser).toEqual(todoData.idUser);
    expect(todo.name).toEqual(todoData.name)
    expect(todo.description).toEqual(todoData.description)
    expect(todo.status).toEqual(true)
  })

})
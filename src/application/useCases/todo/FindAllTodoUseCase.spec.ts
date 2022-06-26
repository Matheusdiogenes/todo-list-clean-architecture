import { randomUUID } from 'crypto'
import { TodoRepoInMemory } from '../../../infra/db'
import { TodoEntity, TodoInput } from '../../../domain/todo/'

describe('FindAllTodoUseCase Test',  () => {  

  it('should find all todo', async () => {
    const todoData: TodoInput = {      
      idUser: randomUUID(),
      name: 'task 2',
      description: 'task 2 description'
    }
    
    const todoEntity = TodoEntity.create(todoData)
    const todoRepoInMemory = new TodoRepoInMemory([todoEntity])
    
    const todos = await todoRepoInMemory.findAll(todoEntity.idUser)    
    
    expect(todos).toHaveLength(1);

  })
  
})

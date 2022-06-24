import { randomUUID } from 'crypto'
import { TodoRepoInMemory } from '../../../infra/db'
import { TodoEntity, TodoPayloadInput } from '../../../domain/todo/'

describe('DeleteTodoUseCase Test',  () => {  

  it('should delete todo', async () => {
    const todoData: TodoPayloadInput = {
      id: randomUUID(),
      idUser: randomUUID(),
      name: 'task 2',
      description: 'task 2 description'
    }
    
    const todoEntity = TodoEntity.create(todoData)
    const todoRepoInMemory = new TodoRepoInMemory([todoEntity])
    
    await todoRepoInMemory.delete(todoData.id!)    
    
    expect(todoRepoInMemory.todos).toHaveLength(0);

  })
  
})

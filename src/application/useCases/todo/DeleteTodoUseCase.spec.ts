import { randomUUID } from 'crypto'
import { TodoRepoInMemory } from '../../../infra/db'
import { TodoEntity, TodoInput } from '../../../domain/todo/'

describe('DeleteTodoUseCase Test',  () => {  

  it('should delete todo', async () => {
    const todoData: TodoInput = {      
      idUser: randomUUID(),
      name: 'task 2',
      description: 'task 2 description'
    }
    
    const todoEntity = TodoEntity.create(todoData)
    const todoRepoInMemory = new TodoRepoInMemory([todoEntity])
    
    await todoRepoInMemory.delete(todoEntity.id)    
    
    expect(todoRepoInMemory.todos).toHaveLength(0);

  })
  
})

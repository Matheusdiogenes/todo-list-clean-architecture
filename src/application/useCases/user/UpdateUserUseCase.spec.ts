import { CreateUserOutput, UpdateUserInput } from "../../../domain/user"
import { UserRepoInMemory } from "../../../infra/db"
import { randomUUID } from 'crypto'
import { UpdateUserUseCase } from "./UpdateUserUseCase"

describe('UpdateUserUseCase Test', () => {

  it('should update a user', async () => {
    const userFake: CreateUserOutput = {
      id: randomUUID(),
      name: 'diogenes',
      username: 'matheus',
      email: 'ma@email.com',
      password: '123456',      
    }

    const repository = new UserRepoInMemory([userFake])    
    
    const userFakeUpdate: UpdateUserInput = {      
      name: 'new name',
      username: 'new_username',
      email: 'new@email.com',
      password: '12345678',      
    }
    
    const updateUserUseCase = new UpdateUserUseCase(repository)    
    await updateUserUseCase.exec(userFake.id, userFakeUpdate)

    const expected = await repository.findOne(userFake.id)
    
    expect(expected!.id).toBeDefined()
    expect(expected!.name).toEqual(userFakeUpdate.name)
    expect(expected!.username).toEqual(userFakeUpdate.username)
    expect(expected!.email).toEqual(userFakeUpdate.email)
    expect(expected!.password).toEqual(userFakeUpdate.password)
    
  })
})
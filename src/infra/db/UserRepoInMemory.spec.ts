import { CreateUserInput, UpdateUserInput } from "../../domain/user";
import { UserRepoInMemory } from "./UserRepoInMemory";
import { randomUUID } from 'crypto'

describe('UserRepoInMemory Test', () => {

  it('should insert a new user', async () => {

    const userRepoInMemory = new UserRepoInMemory()
    const userData: CreateUserInput = {
      email: 'any_email',
      username: 'any username',
      name: "any name",
      password: 'secret'
    }
    const user = await userRepoInMemory.create(userData)

    expect(user.id).toBeDefined();
    expect(user.name).toEqual(userData.name)
    expect(user.username).toEqual(userData.username)
    expect(user.email).toEqual(userData.email)
    expect(user.password).toEqual(userData.password)
  })

  it('should find a user', async () => {
    const userRepoInMemory = new UserRepoInMemory()
    const userData: CreateUserInput = {
      email: 'any_email',
      username: 'any username',
      name: "any name",
      password: 'secret'
    }

    const user = await userRepoInMemory.create(userData)
    const findUser = await userRepoInMemory.findOne(user.id)

    expect(findUser!.id).toBeDefined();
    expect(findUser!.name).toEqual(userData.name)
    expect(findUser!.username).toEqual(userData.username)
    expect(findUser!.email).toEqual(userData.email)
    expect(findUser!.password).toEqual(userData.password)

  })

  it('should update a user', async () => {
    const userFake = {
      id: randomUUID(),
      email: 'any_email',
      username: 'any username',
      name: "any name",
      password: 'secret'
    }
    const userRepoInMemory = new UserRepoInMemory([userFake])
    const updateData: UpdateUserInput = {
      email: 'new_email',
      username: 'new username',
      name: "new name",
      password: 'secretkey'
    }
    
    const userUpdated = await userRepoInMemory.save(userFake.id, updateData)

    expect(userUpdated!.id).toBeDefined();
    expect(userUpdated!.name).toEqual(updateData.name)
    expect(userUpdated!.username).toEqual(updateData.username)
    expect(userUpdated!.email).toEqual(updateData.email)
    expect(userUpdated!.password).toEqual(updateData.password)
  })

})
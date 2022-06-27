import { UserInput, UserOutput } from "../../domain/user";
import { UserRepoInMemory } from "./UserRepoInMemory";
import { randomUUID } from "crypto";

describe('UserRepoInMemory Test', () => {

  it('should insert a new user', async () => {

    const userRepoInMemory = new UserRepoInMemory()
    const userData: UserInput = {
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
    const userData: UserInput = {
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

  it('should find all user', async () => {
    // Mock
    const userData: UserOutput[] = [
      {
        id: randomUUID(),
        email: 'any_email',
        username: 'any username',
        name: "any name",
        password: 'secret'
      },
      {
        id: randomUUID(),
        email: 'any_email',
        username: 'any username',
        name: "any name",
        password: 'secret'
      }
    ]
    
    const userRepoInMemory = new UserRepoInMemory(userData)
    const users = await userRepoInMemory.findAll() 

    expect(users).toHaveLength(2);
  })

})
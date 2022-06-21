import { UserEntity, UserPayload } from "../../domain/user";
import { UserRepoInMemory } from "./UserRepoInMemory";

describe('UserRepoInMemory Test', () => {

  it('should insert a new user', async () => {
    const userRepoInMemory = new UserRepoInMemory()
    const userData: UserPayload = {
      email: 'any_email',
      username: 'any username',
      name: "any name",
      password: 'secret'
    }

    const user = new UserEntity(userData)

    await userRepoInMemory.create(user)

    expect(user.id).toBeDefined();
    expect(user.name).toEqual(userData.name)
    expect(user.username).toEqual(userData.username)
    expect(user.email).toEqual(userData.email)
    expect(user.password).toEqual(userData.password)
    expect(user.todos).toHaveLength(0)

  })
})
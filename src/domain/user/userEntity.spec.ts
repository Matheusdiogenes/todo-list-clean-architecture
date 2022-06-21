import { UserPayload, UserEntity } from "../user"

describe('User', () => {
  describe('Create', () => {

    it('Should create a user with empty to-do list', () => {
      const userData: UserPayload = {
        name: 'diogenes',
        username: 'matheus',
        email: 'ma@email.com',
        password: '123456',
      }
      const user = new UserEntity(userData)

      expect(user.id).toBeDefined();
      expect(user.name).toEqual(userData.name)
      expect(user.username).toEqual(userData.username)
      expect(user.email).toEqual(userData.email)
      expect(user.password).toEqual(userData.password)
      expect(user.todos).toHaveLength(0)
    })

  })

})
import { UserPayload } from "./type"
import { UserEntity } from "./UserEntity"

describe('User', () => {
  describe('Create', () => {

    it('Should create a user with empty to-do list', () => {
      const userData: UserPayload = {
        name: 'diogenes',
        username: 'matheus',
        email: 'ma@email.com',
        password: '123456',
      }
      const user = UserEntity.create(userData)      

      expect(user.name).toEqual(userData.name)
      expect(user.username).toEqual(userData.username)
      expect(user.email).toEqual(userData.email)
      expect(user.password).toEqual(userData.password)
      expect(user.tasks).toHaveLength(0)
    })

  })

})
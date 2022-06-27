import axios from 'axios'

describe('API Test', () => {

  describe('User', () => {
    let userOneId: string
    it('should create a user #1', async () => {
      const userOne = {
        "name": "diogenes",
        "username": "matheus",
        "email": "ma@email.com",
        "password": "123456"
      }
      const request = await axios.post('http://localhost:3333/user', userOne)
      userOneId = request.data.user.id

      expect(request.data.user.id).toBeDefined()
      expect(request.data.user.name).toEqual(userOne.name)
      expect(request.data.user.email).toEqual(userOne.email)
      expect(request.data.user.username).toEqual(userOne.username)
      expect(request.data.user.password).toEqual(userOne.password)
    })

    it('should find a user', async () => {
      const request = await axios.get(`http://localhost:3333/user/${userOneId}`)      

      expect(request.data.user).toStrictEqual({
        id: userOneId,
        name: "diogenes",
        username: "matheus",
        email: "ma@email.com",
        password: "123456"
      })
    })

    it('should find all users', async () => {
      const request = await axios.get(`http://localhost:3333/user`)
      expect(request.data.user).toHaveLength(1)
    })
  })

})
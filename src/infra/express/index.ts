import express, { Request, Response } from 'express'
import { FindOneUserUseCase } from '../../application/useCases/user/FindOneUserUseCase'
import { CreateUserUseCase } from '../../application/useCases/user/CreateUserUseCase'
import { UserRepoInMemory } from '../db'

const repository = new UserRepoInMemory()
const createUserUseCase = new CreateUserUseCase(repository)
const findOneUserUseCase = new FindOneUserUseCase(repository)

const app = express()
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.json({
    api: 'ON'
  })
})

app.post('/user', async (req: Request, res: Response) => {
  const userData = {
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  }
  const user = await createUserUseCase.exec(userData)
  res.json({user})
})

app.get('/user', async (req: Request, res: Response) => {
  const user = await findOneUserUseCase.exec(req.body.id)
  res.json({
    user
  })
})

const PORT = 3333
app.listen(3333, () => {
  console.log(`server run: localhost:${PORT}`);

})
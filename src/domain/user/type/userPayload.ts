export type TaskPayload = {
  name: string
  description: string
  status?: boolean
}

export type UserPayload = {
  name: string
  username: string
  email: string
  password: string
  tasks?: TaskPayload[]
}

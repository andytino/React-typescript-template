import { rest } from 'msw'
import { dummyUser } from './mocks_data/user'

export const handlers = [
  // Handles a POST /login request
  rest.post('/login', null),
  // Handles a GET /user request
  rest.get('/user', (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(500), ctx.json(dummyUser))
  })
]

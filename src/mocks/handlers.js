import { rest } from 'msw'
import { dummyUser } from './mocks_data/user'
import {
  dummyAuthLogin,
  dummyRefreshAuthLogin,
  // dummyfailRefreshAuthLogin,
  dummyAuthMe
} from './mocks_data/auth'

export const handlers = [
  // Handles a POST /login request
  rest.post('/auth/login', (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(500), ctx.json(dummyAuthLogin))
    // return res(ctx.status(401), ctx.delay(500), ctx.json(dummyAuth))
  }),
  rest.post('/auth/refresh-token', (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(500), ctx.json(dummyRefreshAuthLogin))
  }),
  // Handles a GET /user request
  rest.get('/user', (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(500), ctx.json(dummyUser))
  }),
  rest.get('/auth/me', (req, res, ctx) => {
    return res(ctx.status(401), ctx.delay(500), ctx.json(dummyAuthMe))
  }),
  rest.get('/auth/me-refresh', (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(500), ctx.json(dummyAuthMe))
  })
]

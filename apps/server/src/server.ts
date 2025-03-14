import { logger } from '@bogeychan/elysia-logger'
import { bearer } from '@elysiajs/bearer'
import { cors } from '@elysiajs/cors'
import { jwt } from '@elysiajs/jwt'
import { serverTiming } from '@elysiajs/server-timing'
import { swagger } from '@elysiajs/swagger'
import { Elysia } from 'elysia'
import { oauth2 } from 'elysia-oauth2'

import { config } from './libs/config'
import { appRoutes } from './routes/app.route'
import { userRoutes } from './routes/user.route'

export const app = new Elysia()
  .use(logger())
  .use(swagger())
  .use(oauth2({}))
  .use(bearer())
  .use(cors())
  .use(jwt({ secret: config.JWT_SECRET }))
  .use(serverTiming())
  .use([appRoutes, userRoutes])

export type ElysiaApp = typeof app

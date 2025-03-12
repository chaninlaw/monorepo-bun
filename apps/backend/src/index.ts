import { cors } from '@elysiajs/cors'
import { swagger } from '@elysiajs/swagger'
import { Elysia, t } from 'elysia'

import { Logger } from './libs/logger.js'
import { loggerMiddleware } from './middlewares/logger.js'

const logger = new Logger('App')
const port = Bun.env.API_PORT || 8080
const app = new Elysia()
  .use(cors())
  .use(loggerMiddleware())
  .use(
    swagger({
      documentation: {
        info: {
          description: 'Elysia API Documentation',
          title: 'Elysia',
          version: '1.0.0',
        },
        tags: [
          { description: 'General endpoints', name: 'App' },
          { description: 'Authentication endpoints', name: 'Auth' },
        ],
      },
      path: '/docs',
    })
  )
  .state('version', 1)
  .get('/', () => ({ status: 'ok' }), {
    detail: {
      description: 'The root endpoint',
      tags: ['App'],
    },
    response: t.Object({
      status: t.String({
        description: 'Returns ok for health check',
      }),
    }),
  })
  .get('/hello', () => 'Hello Elysia', {
    detail: {
      description: 'The hello endpoint',
      tags: ['App'],
    },
    response: t.String({
      description: 'Returns a string',
    }),
  })
  .listen(port)

logger.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)

export type App = typeof app

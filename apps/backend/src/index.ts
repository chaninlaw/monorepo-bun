import { env } from '@/lib/env.js'
import { cors } from '@elysiajs/cors'
import { Elysia, t } from 'elysia'

const app = new Elysia()
  .use(cors())
  .get('/', () => 'Hi Elysia')
  .get('/id/:id', ({ params: { id } }) => id)
  .post('/mirror', ({ body }) => body, {
    body: t.Object({
      id: t.Number(),
      name: t.String(),
    }),
  })
  .listen(env.port, (server) => {
    console.log(`🦊 Elysia is running at ${server.hostname}:${server.port}`)
  })

export type App = typeof app

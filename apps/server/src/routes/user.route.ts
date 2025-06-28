import { db } from '@workspace/database'
import { model } from '@workspace/database/model'
import { table } from '@workspace/database/schema'
import { Elysia, t } from 'elysia'

const { user } = model.insert

export const userRoutes = new Elysia({ prefix: 'users', tags: ['User'] })
  .get('/', async () => {
    const users = await db.select().from(table.user).execute()
    return users
  })
  .post(
    '/',
    async ({ body }) => {
      const [insertedUser] = await db
        .insert(table.user)
        .values(body)
        .returning({
          firstName: table.user.firstName,
          id: table.user.id,
          lastName: table.user.lastName,
        })

      return insertedUser
    },
    {
      body: t.Object({
        firstName: user.firstName,
        lastName: user.lastName,
      }),
    }
  )

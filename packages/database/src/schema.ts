import { integer, pgTable, varchar } from 'drizzle-orm/pg-core'

export const user = pgTable('user', {
  firstName: varchar().notNull(),
  lastName: varchar().notNull(),
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
})

export const table = {
  user,
} as const

export type Table = typeof table

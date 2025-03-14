import { drizzle } from 'drizzle-orm/bun-sql'
import { SQL } from 'bun'

export * from 'drizzle-typebox'
const client = new SQL(process.env.DATABASE_URL!)

export const db = drizzle({ casing: 'snake_case', client })

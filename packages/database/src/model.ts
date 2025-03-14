import { table } from './schema'
import { spreads } from './utils'

export const model = {
  insert: spreads(
    {
      user: table.user,
    },
    'insert'
  ),
  select: spreads(
    {
      user: table.user,
    },
    'select'
  ),
} as const

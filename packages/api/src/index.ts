import { treaty } from '@elysiajs/eden'
import type { App } from '@repo/backend'

export const client = treaty<App>(`localhost:${process.env.API_PORT || 8080}`)

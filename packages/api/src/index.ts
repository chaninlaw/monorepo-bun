import type { ElysiaApp } from 'server'
import { treaty } from '@elysiajs/eden'

const port = process.env.API_PORT || 8080
export const app = treaty<ElysiaApp>(`localhost:${port}`)

import { Elysia } from 'elysia'
import os from 'os'

export const appRoutes = new Elysia({ tags: ['App'] })
  .get('/', 'Hello, World')
  .get('/health', () => {
    const cpuUsage = process.cpuUsage()
    const totalMemory = os.totalmem()
    const freeMemory = os.freemem()

    return {
      cpuUsage,
      freeMemory,
      totalMemory,
    }
  })

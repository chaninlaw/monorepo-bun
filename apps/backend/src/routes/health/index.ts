import { App } from '@/index.js'
import os from 'node:os'

export default (app: App) => {
  app.get('/', () => ({ status: 'ok' }))

  app.get('/info', () => {
    const cpuUsage = process.cpuUsage()
    const totalMemory = os.totalmem()
    const freeMemory = os.freemem()

    return {
      cpuUsage,
      freeMemory,
      totalMemory,
    }
  })

  return app
}

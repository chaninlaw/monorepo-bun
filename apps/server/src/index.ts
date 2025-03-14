import { config } from '@/libs/config'

import { app } from './server'

const signals = ['SIGINT', 'SIGTERM']

for (const signal of signals) {
  process.on(signal, async () => {
    console.log(`Received ${signal}. Initiating graceful shutdown...`)
    await app.stop()
    process.exit(0)
  })
}

process.on('uncaughtException', (error) => {
  console.error(error)
})

process.on('unhandledRejection', (error) => {
  console.error(error)
})


app.listen(config.API_PORT, (server) =>
  console.log(`🦊 Server started at ${server?.url.origin}`)
)

import { app } from '@/index.js'
import { describe, expect, it } from 'bun:test'

describe('heathcheck', () => {
  it('return a response', async () => {
    const response = await app
      .handle(new Request('http://localhost/heathcheck'))
      .then(async (res) => res.text())

    expect(response).toBe('OK')
  })
})

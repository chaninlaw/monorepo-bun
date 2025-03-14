import { beforeAll, describe, expect, it } from 'bun:test'
import { Elysia } from 'elysia'

describe('heathcheck', () => {
  let app: Elysia

  beforeAll(() => {
    app = new Elysia()
  })

  it('return a response', async () => {
    const response = await app
      .handle(new Request('http://localhost/heathcheck'))
      .then(async (res) => res.text())

    expect(response).toBe('OK')
  })
})

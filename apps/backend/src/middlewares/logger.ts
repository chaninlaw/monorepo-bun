import { Logger } from '@/libs/logger.js'
import { Elysia } from 'elysia'

const loggerReq = new Logger('Req')
const loggerRes = new Logger('Res')

export const loggerMiddleware = ({
  methods = ['GET', 'PUT', 'POST', 'DELETE'],
} = {}) =>
  new Elysia()
    .derive({ as: 'global' }, () => ({ start: Date.now() }))
    .onBeforeHandle({ as: 'global' }, (ctx) => {
      if (!methods.includes(ctx.request.method)) return
      loggerReq.log('<--', ctx.request.method, ctx.path)
    })
    .onAfterHandle({ as: 'global' }, (ctx) => {
      if (!methods.includes(ctx.request.method)) return
      loggerRes.log(
        '-->',
        ctx.request.method,
        ctx.path,
        ctx.set.status ?? Number.NaN,
        'in',
        Date.now() - ctx.start,
        'ms'
      )
    })
    .onError({ as: 'global' }, (ctx) => {
      if (!methods.includes(ctx.request.method)) return
      loggerRes.log(
        '-->',
        ctx.request.method,
        ctx.path,
        ctx.set.status,
        'in',
        ctx.start ? Date.now() - ctx.start : Number.NaN,
        'ms'
      )
    })

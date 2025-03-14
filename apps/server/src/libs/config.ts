import env from 'env-var'

export const config = {
  API_PORT: env.get('API_PORT').default(3000).asPortNumber(),
  API_URL: env
    .get('API_URL')
    .default(`https://${env.get('PUBLIC_DOMAIN').asString()}`)
    .asString(),
  DATABASE_URL: env.get('DATABASE_URL').required().asString(),
  ENCRYPTION_ALGORITHM: env
    .get('PUBLIC_DOMAIN')
    .default('AES-256-CBC')
    .asEnum(['AES-256-CBC']),
  ENCRYPTION_KEY: env.get('ENCRYPTION_KEY').required().asString(),
  JWT_SECRET: env.get('JWT_SECRET').required().asString(),
  LOCK_STORE: env
    .get('LOCK_STORE')
    .default('redis')
    .asEnum(['memory', 'redis']),
  NODE_ENV: env
    .get('NODE_ENV')
    .default('development')
    .asEnum(['production', 'test', 'development']),
  REDIS_HOST: env.get('REDIS_HOST').default('localhost').asString(),
}

export class Logger {
  constructor(private readonly name: string) {}

  debug(...values: unknown[]) {
    console.debug(`${this.name}: `, ...values)
  }

  error(...values: unknown[]) {
    console.error(`${this.name}: `, ...values)
  }

  info(...values: unknown[]) {
    console.info(`${this.name}: `, ...values)
  }

  log(...values: unknown[]) {
    console.log(`${this.name}: `, ...values)
  }

  warn(...values: unknown[]) {
    console.warn(`${this.name}: `, ...values)
  }
}

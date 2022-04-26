import { logger } from './logger'

class ErrorHandler extends Error {
  constructor(statusCode, message) {
    super()
    this.statusCode = statusCode
    this.message = message
  }
}

const errorHandler = (error, res) => {
  const { statusCode, message } = error
  logger.error(`${statusCode} - ${message}`)
  res.sendStatus(statusCode)
}

module.exports = {
  ErrorHandler,
  errorHandler,
}

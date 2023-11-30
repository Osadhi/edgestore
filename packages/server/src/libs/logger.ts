/* eslint-disable no-console */

const logLevel = ['debug', 'info', 'warn', 'error', 'none'] as const;

export type LogLevel = typeof logLevel[number];

class Logger {
  private logLevel: LogLevel;

  constructor(logLevel?: LogLevel) {
    this.logLevel =
      logLevel ?? process.env.NODE_ENV === 'production' ? 'error' : 'info';
  }

  private shouldLog(level: LogLevel): boolean {
    return logLevel.indexOf(level) >= logLevel.indexOf(this.logLevel);
  }

  debug(message?: any, ...optionalParams: any[]): void {
    if (this.shouldLog('debug')) {
      console.debug(message, ...optionalParams);
    }
  }

  info(message?: any, ...optionalParams: any[]): void {
    if (this.shouldLog('info')) {
      console.info(message, ...optionalParams);
    }
  }

  warn(message?: any, ...optionalParams: any[]): void {
    if (this.shouldLog('warn')) {
      console.warn(message, ...optionalParams);
    }
  }

  error(message?: any, ...optionalParams: any[]): void {
    if (this.shouldLog('error')) {
      console.error(message, ...optionalParams);
    }
  }
}

export default Logger;

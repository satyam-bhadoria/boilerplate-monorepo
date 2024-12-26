const LOG_LEVEL = {
  debug: 10,
  info: 20,
  warn: 30,
  error: 40,
};

type LogLevelType = keyof typeof LOG_LEVEL;

const logLevel = (process.env.LOG_LEVEL || 'info') as LogLevelType;

export class Logger {
  log(currLogLevel: LogLevelType, ...args: any) {
    if (LOG_LEVEL[currLogLevel] >= LOG_LEVEL[logLevel]) {
      console.log(...args);
    }
  }
  debug(...args: any) {
    this.log('debug', ...args);
  }
  // info(...args: any) {
  //   this.log('info', ...args);
  // }
  warn(...args: any) {
    this.log('warn', ...args);
  }
  error(...args: any) {
    this.log('error', ...args);
  }
}

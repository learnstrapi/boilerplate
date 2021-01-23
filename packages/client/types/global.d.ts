declare module 'NodeJS' {
  interface Process {
    browser: boolean
  }
  interface Global {
    fetch: any
  }
}

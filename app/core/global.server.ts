declare global {
  /* eslint-disable-next-line no-var */
  var __persist: Record<string, unknown>
}

if (typeof global.__persist !== 'object') {
  global.__persist = {}
}

const createGlobalVariable = <T>(key: string, getInitialValue: () => T): T => {
  if (key in global.__persist) {
    return global.__persist[key] as T
  }

  const value = getInitialValue()
  global.__persist[key] = value
  return value
}

export { createGlobalVariable }

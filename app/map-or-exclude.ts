const EXCLUDE = Symbol("EXCLUDE")

const mapOrExclude = <Input, Output>(
  list: Input[],
  fn: (item: Input, index: number, list: Input[]) => Output | typeof EXCLUDE,
): Output[] => {
  return list
    .map((item, index) => {
      return fn(item, index, list)
    })
    .filter((item) => {
      return item !== EXCLUDE
    }) as Output[]
}

export { EXCLUDE, mapOrExclude }

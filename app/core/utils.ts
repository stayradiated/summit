const EXCLUDE = Symbol('EXCLUDE')

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

const recordFromList = <Item>(
  list: Item[],
  getId: (item: Item) => number | string,
): Record<string, Item> => {
  const record: Record<string, Item> = {}
  for (const item of list) {
    record[getId(item)] = item
  }

  return record
}

export { EXCLUDE, mapOrExclude, recordFromList }

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

export { recordFromList }

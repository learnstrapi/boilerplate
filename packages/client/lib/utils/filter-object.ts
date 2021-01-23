export let objectWithoutKey = (object: { [x: string]: any }, key: any) => {
  const { [key]: deletedKey, ...otherKeys } = object
  return otherKeys
}

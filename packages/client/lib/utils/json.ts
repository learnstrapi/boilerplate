export let updateJSON = (json, key, newValues) => {
  let json2Object = JSON.parse(json)
  json2Object[key].push(newValues)

  return JSON.stringify(json2Object)
}

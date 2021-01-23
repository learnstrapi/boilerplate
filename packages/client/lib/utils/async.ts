export let wrapPromise = promise =>
  promise.then(result => [result]).catch(error => [, error])

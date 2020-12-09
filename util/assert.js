
export function assert(expected, actual) {
  if (Array.isArray(expected) && Array.isArray(actual) ) {
    return expected.filter(element => !actual.includes(element)).length === 0
  } else {
    return expected == actual
  }
}

import * as R from 'ramda';

export function assert(expected, actual) {
  if (Array.isArray(expected) && Array.isArray(actual)) {
    return expected.filter(element => !actual.includes(element)).length === 0
  }

  return R.equals(expected, actual)
}
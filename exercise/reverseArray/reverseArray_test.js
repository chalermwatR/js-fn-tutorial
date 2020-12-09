import { reverseArray } from './reverseArray'
import { assert } from '../../util/assert'

function reverseArray_test() {
  const testCases = [
    {
      input: [2, 3, 4, 5, 6, 7],
      expected: [7, 6, 5, 4, 3, 2]
    },
    {
      input: "abcd",
      expected: "dcba"
    }
  ]

  console.log("REVERSE ARRAY TEST\n")
  testCases.map((c) => {
    const actual = reverseArray(c.input)
    const result = assert(c.expected, actual)
    if (!result) {
      console.log("-- FAILED")
      console.log(`input: ${c.input}`)
      console.log("actual :", actual)
      console.log("expected :", c.expected)
      console.log("\n")
    } else {
      console.log("-- SUCCESS")
    }
  })
  console.log("============================\n")
}

export default reverseArray_test
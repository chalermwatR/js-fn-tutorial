import primeTo from './primeTo'
import { assert } from '../../util/assert'

function primeTo_test() {
  const testCases = [
    {
      input: [2, 3, 4, 5, 6, 7],
      expected: [2, 3, 5, 7]
    },
    {
      input: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      expected: [2, 3, 5, 7, 11]
    },
    {
      input: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
      expected: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
    }
  ]

  console.log("PRIME TO TEST\n")
  testCases.map((c) => {
    const actual = primeTo(c.input)
    const result = assert(c.expected, actual)
    if (!result) {
      console.log("-- FAILED")
      console.log("input :", c.input)
      console.log("actual :", actual)
      console.log("expected :", c.expected)
      console.log("\n")
    } else {
      console.log("-- SUCCESS")
    }
  })
  console.log("============================\n")
}

export default primeTo_test
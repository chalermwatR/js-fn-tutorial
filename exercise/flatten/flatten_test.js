import { flatten } from './flatten'
import { assert } from '../../util/assert'

function flatten_test() {
  const testCases = [
    {
      input: [
        ["1", "2", "3"],
        [true],
        [4, 5, 6]
      ],
      expected: ["1", "2", "3", true, 4, 5, 6]
    }
  ]

  console.log("FLATTEN TEST\n")
  testCases.map((c) => {
    const actual = flatten(c.input)
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

export default flatten_test
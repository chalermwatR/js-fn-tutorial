import { symmetric } from './symmetric'
import { assert } from '../../util/assert'

function symmetric_test() {
  const testCases = [
    {
      input: "khokho",
      expected: true
    },
    {
      input: "tenet",
      expected: false
    },
    {
      input: "ama",
      expected: true
    }
  ]

  console.log("SYMMETRIC TEST\n")
  testCases.map((c) => {
    const actual = symmetric(c.input)
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

export default symmetric_test
import { swapCase } from './swapCase'
import { assert } from '../../util/assert'

function swapCase_test() {
  const testCases = [
    {
      input: "hey gurl, lets javascript together sometime",
      expected: "HEY gurl, LETS javascript TOGETHER sometime"
    }
  ]

  console.log("swapCase TEST\n")
  testCases.map((c) => {
    const actual = swapCase(c.input)
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

export default swapCase_test
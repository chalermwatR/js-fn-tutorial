import { matching2Array } from './matching2Array'
import { assert } from '../../util/assert'

function matching2Array_test() {
  const testCases = [
    {
      arr1: [2, 3, 4, 5, 6, 7],
      arr2: [2, 3, 4, 5, 6, 7],
      expected: true
    },
    {
      arr1: [2, 3, 4, 5, 6, 7, 8],
      arr2: [2, 3, 4, 5, 6, 7],
      expected: false
    },
    {
      arr1: [2, 3, 4, 5, 6, 7, 9, 10],
      arr2: [2, 3, 4, 5, 6, 7, 11, 12],
      expected: false
    }
  ]

  console.log("MATCHING 2 ARRAYS\n")
  testCases.map((c) => {
    const actual = matching2Array(c.arr1, c.arr2)
    const result = assert(c.expected, actual)
    if (!result) {
      console.log("-- FAILED")
      console.log(`input: arr1 = ${c.arr1}, arr2 = ${c.arr2}`)
      console.log("actual :", actual)
      console.log("expected :", c.expected)
      console.log("\n")
    } else {
      console.log("-- SUCCESS")
    }
  })
  console.log("============================\n")
}

export default matching2Array_test
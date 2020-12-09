// abc => cba, [1,2,3] => [3,2,1]
export function reverseArray(input) {
  if(Array.isArray(input)){
    return input.reverse()
  }
  return input.split("").reverse().join("")
}
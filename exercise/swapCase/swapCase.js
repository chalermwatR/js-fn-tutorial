// hello i am gaoey ~> HELLO i AM gaoey
export function swapCase(input) {
  return input.split(" ")
    .map((x, index) => {
      if(index === 0 || index%2 === 0) return x.toUpperCase()
      return x
    })
    .join(" ")
}
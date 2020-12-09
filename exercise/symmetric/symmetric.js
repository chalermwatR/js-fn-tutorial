// ama is symmetric 
// tenet is not symmetric
// aabbaa is not symmetric
// aaaa is symmetric
// khokho is symmetric
export function symmetric(input) {
  const d = input.split("")
  const index = parseInt(d.length/2, 10)
  
  const first = d.slice(0, (index >= 2)? index : index+1).join("")
  const sec = d.slice(index).join("")
  
  return first === sec
}
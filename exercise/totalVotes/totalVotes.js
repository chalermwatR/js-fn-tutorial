// see test case
export function totalVotes(input) {
  return input.filter(x => x.voted).length
}
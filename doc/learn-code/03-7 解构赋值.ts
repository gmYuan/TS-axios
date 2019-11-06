let input: [number, number] = [1, 3]

function add([first, second]: [number, number]) {
  console.log(first)
  console.log(second)
  return first + second
}

add(input)


interface Girl {
  name: string,
  isBeauty: boolean
}

function createGirl(temp: Girl) {
  console.log(temp.name)
}

let person = {name: '刘亦菲', isBeauty: true}
createGirl(person)

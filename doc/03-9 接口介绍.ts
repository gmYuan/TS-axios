interface Girl {
  name: string,
  isBeauty: boolean
}

function getGirl(obj: Girl) {
  console.log(obj.name)
}

let person1 = {name: '周冬雨'}
let person2 = {name: '刘亦菲', isBeauty: true}

getGirl(person2)
// getGirl(person1)   会报错, 缺少必传属性isBeauty



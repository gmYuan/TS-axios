// 对象解构
function showObj(obj: {name: string, age ?: number}) {
  let {name, age = 20} = obj
  console.log(age)
}

showObj({name: 'test'})

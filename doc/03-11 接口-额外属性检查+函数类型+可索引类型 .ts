

/* 1 接口: 函数类型 */
interface ListFunc {
  (api: object[],  params: object): boolean
}
let getComment: ListFunc

getComment = function (api, para) {
  let result = api.push(para)
  return result > 0
}


/* 2 接口: 可索引的类型  */
interface stringArr {
  [index: string]: string
}

let arrex2: stringArr = {'name': 'ygm', 'age': '22'}
console.log(arrex2)

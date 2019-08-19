
/* 1 额外类型检查 */
interface Square2 {
  color: string
  area: number
}

interface SquareConfig2 {
  color?: string,
  width?: number
  // [propName: string]: any   //S2  索引签名
}

function createSquare2(config: SquareConfig2): Square2 {
  let newConfig = {color: 'red', area: 200}
  if (config.color) {
    newConfig.color = config.color
  }
  if (config.width) {
    newConfig.area = config.width * config.width
  }
  return newConfig
}

// let result2 = createSquare2({color: 'blue', height: 10})   // S1 报错，直接传入对象时，TS会检查额外属性
// console.log(11, result2)



/* 2 接口: 函数类型 */
interface searchFunc {
  (source: string, subString: string): boolean             // 多了()和 整体返回类型
}

let mySearch: searchFunc
mySearch = function (src: string, sub: string) {
  let result = src.search(sub)
  return result > -1               // 函数接口 只是隐藏了返回结果的规定，其他感觉没什么特殊点
}

/* 3 接口: 可索引的类型  */
interface StringArr {
  [i: number]: string                      //S1  多了[]和 对应key的value的类型
}

let myarr: StringArr = ['Jordan', 'Bird']
let ex1: string = myarr[0]
console.log(ex1)       // Jordan


interface DirectoryTest {
  [i: string]: number
  age: number,
  // name: string,    S2 要求返回number就不能是string, 但是返过来要求返回string,结果返回number就不报错(string是父类，number是子类)
}

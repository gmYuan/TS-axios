
// 1 可选属性接口
interface Square {
  color: string,
  area: number
}
interface SquareConfig {
  color?: string,
  width?: number
}

function createSquare(config: SquareConfig): Square {
  let newConfig = {color: 'red', area: 200}
  if (config.color) {
    newConfig.color = config.color
  }
  if (config.width) {
    newConfig.area = config.width * config.width
  }
  return newConfig
}

let result = createSquare({color: 'blue'})
console.log(result)


// 2 只读属性接口
interface boy {
  readonly year: number
  readonly name: string
}

let kd: boy = {name: 'kd', year: 23}
// kd.year = 12  会报错，只读属性无法修改


/* 3 只读数组 */
let readArr: ReadonlyArray<number> = [1,2,3]
// readArr.length = 3  // 报错，只读数组无法修改

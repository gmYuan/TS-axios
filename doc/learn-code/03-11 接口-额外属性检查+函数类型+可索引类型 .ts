
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

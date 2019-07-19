// 1 枚举
enum Color {
  Red = 2,
  Green = 4,
  Blue = 1
}

let c1: string = Color[4]
let c2: Color = Color.Green
console.log(c1, c2)

// 2 any
let anything : any[] = ['111ssss', 32]
anything = [222]
console.log('angthing是' ,anything)

// 3 never / void / null / undefined


// 4 object
declare function create(o: object | null): void

// create({'name': 'ycstar'})  正确
// create(123)


// 5 类型断言
let test1: any = '我是测试1'
let test1Length: number = (test1 as string).length
console.log('长度:', test1Length)

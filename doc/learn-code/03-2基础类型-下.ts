//1 枚举
enum Color {red = 2, green, blue = 5}

let excolor: Color = Color.green
let excolorName: string = Color[5]
console.log(excolor, excolorName)


// 2 any
let ex2: any = 99
ex2 = '晚上好'
console.log(ex2)


// 3 never / void / null / undefined
function fn3(): void {
  console.log('我是void例子')
}
fn3()


// 4 object
declare function create(o: object | null): void;

//create({'name': 'ygm'})  // 正确
// create(4354)


// 5 类型断言
let ex5: any = '我是例子5'
let ex6: number = ex5.length
console.log(ex6)


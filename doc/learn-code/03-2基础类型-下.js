//1 枚举
var Color;
(function (Color) {
    Color[Color["red"] = 2] = "red";
    Color[Color["green"] = 3] = "green";
    Color[Color["blue"] = 5] = "blue";
})(Color || (Color = {}));
var excolor = Color.green;
var excolorName = Color[5];
console.log(excolor, excolorName);
// 2 any
var ex2 = 99;
ex2 = '晚上好';
console.log(ex2);
// 3 never / void / null / undefined
function fn3() {
    console.log('我是void例子');
}
fn3();
//create({'name': 'ygm'})  // 正确
// create(4354)
// 5 类型断言
var ex5 = '我是例子5';
var ex6 = ex5.length;
console.log(ex6);
//# sourceMappingURL=03-2基础类型-下.js.map
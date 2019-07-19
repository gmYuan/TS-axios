// 1 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 2] = "Red";
    Color[Color["Green"] = 4] = "Green";
    Color[Color["Blue"] = 1] = "Blue";
})(Color || (Color = {}));
var c1 = Color[4];
var c2 = Color.Green;
console.log(c1, c2);
// 2 any
var anything = ['111ssss', 32];
anything = [222];
console.log('angthing是', anything);
// create({'name': 'ycstar'})  正确
// create(123)
// 5 类型断言
var test1 = '我是测试1';
var test1Length = test1.length;
console.log('长度:', test1Length);
//# sourceMappingURL=03-2基础类型-下.js.map
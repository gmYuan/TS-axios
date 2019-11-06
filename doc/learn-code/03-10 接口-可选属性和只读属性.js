function createSquare(config) {
    var newConfig = { color: 'red', area: 200 };
    if (config.color) {
        newConfig.color = config.color;
    }
    if (config.width) {
        newConfig.area = config.width * config.width;
    }
    return newConfig;
}
var result = createSquare({ color: 'blue' });
console.log(result);
var kd = { name: 'kd', year: 23 };
// kd.year = 12  会报错，只读属性无法修改
/* 3 只读数组 */
var readArr = [1, 2, 3];
// readArr.length = 3  // 报错，只读数组无法修改
//# sourceMappingURL=03-10 接口-可选属性和只读属性.js.map
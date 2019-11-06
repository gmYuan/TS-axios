function createSquare2(config) {
    var newConfig = { color: 'red', area: 200 };
    if (config.color) {
        newConfig.color = config.color;
    }
    if (config.width) {
        newConfig.area = config.width * config.width;
    }
    return newConfig;
}
var mySearch;
mySearch = function (src, sub) {
    var result = src.search(sub);
    return result > -1; // 函数接口 只是隐藏了返回结果的规定，其他感觉没什么特殊点
};
var myarr = ['Jordan', 'Bird'];
var ex1 = myarr[0];
console.log(ex1); // Jordan
//# sourceMappingURL=03-11 接口-额外属性检查+函数类型+可索引类型 .js.map
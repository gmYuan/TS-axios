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
// let result2 = createSquare2({color: 'blue', height: 10})   // S1 报错，直接传入对象时，TS会检查额外属性
// console.log(11, result2)
//# sourceMappingURL=03-11 接口-额外属性检查+函数类型+可索引类型 .js.map
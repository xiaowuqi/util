/**
 * @ignore
 * @file format.js
 * @author wuqi03(wuqi03@baidu.com)
 * @time 14-11-10
 */

define(function () {

    /**
     * 字符串替换
     * @param {string} target 原始字符串
     * @param {*} Object 替换数据
     * @returns {string}
     *
     *
     * 支持以下两种输入方法
     * 1. var a = format('Result is #{0}, #{1}', 22, 33);   // Result is 22, 33
     * 2. var a = format('#{name} is ${sex}', {
     *        name: 'mySunShinning',
     *        sex: 'female'
     *    });
     */
    function format(target, Object) {
        var arr = [].slice.call(arguments, 1);
        return target.replace(/\\?\#{([^{}]+)}/gm, function(match, name) {
            if (match.charAt(0) == '\\') {
                return match.slice(1);
            }
            if (!isNaN(+name)) {
                return arr[+name];
            }
            else if (Object && Object[name]) {
                return Object[name];
            }
            return '';
        });
    }

    return {
        format: format
    };
});

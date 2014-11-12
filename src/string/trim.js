/**
 * @ignore
 * @file trim.js
 * @author mySunShinning(441984145@qq.com)
 * @time 14-11-12
 */

define(function () {

    var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    /**
     * 去掉字符串两侧的空白符
     * @param {string} str 字符串
     * @returns {string}
     */
    function trim(str) {
        return str == null ? '' : str.replace(rtrim, '');
    }

    return {
        trim: trim
    };
});

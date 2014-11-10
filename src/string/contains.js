/**
 * @ignore
 * @file contains.js
 * @author mySunShinning(441984145@qq.com)
 * @time 14-11-10
 */

define(function () {

    /**
     * 判断字符串中是否包含另外的字符串
     * @param {string} target 原始字符串
     * @param {string} str 判断包含字符串
     * @param {string} [separator] 分隔符（可以用来判断className字符串）
     * @returns {boolean}
     */
    function contains(target, str, separator) {
        return separator
            ? (separator + target + separator).indexOf(separator + str + separator) > -1
            : target.indexOf(str) > -1;
    }

    /**
     * 判断是否以某个字符串开始
     * @param {string} target 原始字符串
     * @param {string} str 判断开始字符串
     * @param {boolean} ignoreCase 是否忽略大小写
     * @returns {boolean}
     */
    function startWith(target, str, ignoreCase) {
        var s = target.substr(0, str.length);
        return ignoreCase
            ? s.toLowerCase() === str.toLowerCase()
            : s === str;
    }

    /**
     * 判断是否以某个字符串结尾
     * @param {string} target 原始字符串
     * @param {string} str 判断结束字符串
     * @param {boolean} ignoreCase 是否忽略大小写
     * @returns {boolean}
     */
    function endWith(target, str, ignoreCase) {
        var s = target.substring(target.length - str.length);
        return ignoreCase
            ? s.toLowerCase() === str.toLowerCase()
            : s === str;
    }

    return {
        contains: contains,
        startWith: startWith,
        endWith: endWith
    };
});

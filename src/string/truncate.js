/**
 * @ignore
 * @file truncate.js
 * @author mySunShinning(441984145@qq.com)
 * @time 14-11-10
 */

define(function () {

    /**
     * 截取字符串并添加省略标识
     * @param {string} target 原始字符串
     * @param {number} length 字符串截取长度
     * @param {string} [truncation] 省略标识
     * @returns {string}
     */
    function truncate(target, length, truncation) {
        length = length || 30;
        truncation = truncation == null ? '...' : truncation;
        return target.length < length
            ? target + ''
            : target.slice(0, length - truncation.length) + truncation;
    }

    return {
        truncate: truncate
    };
});

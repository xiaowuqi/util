/**
 * @ignore
 * @file byteLen.js
 * @author mySunShinning(441984145@qq.com)
 * @time 14-11-10
 */

define(function () {

    /**
     * 获取字符串的字节长度
     * @param {string} target 原始字符串
     * @returns {number}
     */
    function byteLen(target) {
        var len = target.length;
        for (var i = 0; i < target.length; i++) {
            target.charCodeAt(i) > 255 && len++;
        }
        return len;
    }

    /**
     * 高级版获取字符串的字节长度
     * @param {string} target 原始字符串
     * @param {number} fix 字节数
     * @returns {number}
     */
    function extendByteLen(target, fix) {
        fix = fix || 2;
        var str = new Array(fix + 1).join('-');
        return target.replace(/[^\x00-\xff]/g, str).length;
    }

    return {
        byteLen: byteLen,
        extendByteLen: extendByteLen
    };
});

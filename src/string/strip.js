/**
 * @ignore
 * @file strip.js
 * @author mySunShinning(441984145@qq.com)
 * @time 14-11-10
 */

define(function () {

    /**
     * 剔除字符串中的html标签
     * @param {string} target 原始字符串
     * @returns {string}
     */
    function stripTag(target) {
        return ((target || '') + '').replace(/<[^>]+>/g, '');
    }

    /**
     * 剔除字符串中的script标签
     * @param {string} target 原始字符串
     * @returns {string}
     */
    function stripScript(target) {
        return ((target || '') + '').replace(/<script[^>]*>(?:[\s\S]*)<\/script>/img, '');
    }

    return {
        stripTag: stripTag,
        stripScript: stripScript
    };
});

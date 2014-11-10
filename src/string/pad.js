/**
 * @ignore
 * @file pad.js
 * @author mySunShinning(441984145@qq.com)
 * @time 14-11-10
 */

define(function () {

    /**
     * 补齐字符串
     * @param {string|number} target 原始字符串或数字
     * @param {number} length 补齐字符串的长度
     * @param {string|null} filling 补齐字符
     * @param {boolean} [isRight] 是否从右侧补齐
     * @returns {string}
     */
    function pad(target, length, filling, isRight){
        var result = target.toString();
        filling = filling || '0';

        while(result.length < length) {
            result = isRight ? target + filling : filling + target;
        }
        return result;
    }

    return {
        pad: pad
    };
});

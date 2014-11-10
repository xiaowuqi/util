/**
 * @ignore
 * @file xss.js
 * @author mySunShinning(441984145@qq.com)
 * @time 14-11-10
 */

define(function () {

    /**
     * 转义HTML
     * @param {string} target 原始字符串
     * @returns {string}
     */
    function escapeHTML(target) {
        return target.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/'/g, '&#39;')
            .replace(/"/g, '$quot;');
    }

    /**
     * 反转义字符串
     * @param {string} target 原始字符串
     * @returns {string}
     */
    function unescapeHTML(target) {
        return target.replace('&lt;', '<')
            .replace('&gt;', '>')
            .replace('&quot;', '"')
            .replace('&#39;', '\'')
            .replace('&amp;', '&');
    }

    return {
        escapeHTML: escapeHTML,
        unescapeHTML: unescapeHTML
    };
});

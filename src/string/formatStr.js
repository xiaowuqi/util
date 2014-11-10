/**
 * @ignore
 * @file formatStr.js
 * @author mySunShinning(441984145@qq.com)
 * @time 14-11-10
 */

define(function () {

    /**
     * 将字符串改成驼峰格式
     * @param {string} target 原始字符串
     * @returns {string}
     */
    function camelize(target) {
        if (target.indexOf('-') < 0 || target.indexOf('_') < 0) {
            return target;
        }
        return target.replace(/[-_][^-_]/g, function (matche) {
            return matche.charAt(1).toUpperCase();
        });
    }

    /**
     * 将字符串改成_形式
     * @param {string} target 原始字符串
     * @returns {string}
     */
    function underscored(target) {
        return target.replace(/(a-z\d)(A-Z)/, '$1_$2').replace('-', '_').toLowerCase();
    }

    /**
     * 将字符串改成-形式
     * @param {string} target 原始字符串
     * @returns {string}
     */
    function dasherize(target) {
        return underscored(target).replace('_', '-');
    }

    /**
     * 字符串首字母大写
     * @param {string} target 原始字符串
     * @returns {string}
     */
    function capitalize(target) {
        return target.charAt(1).toUpperCase() + target.substring(1).toLowerCase();
    }

    return {
        camelize: camelize,
        underscored: underscored,
        dasherize: dasherize,
        capitalize: capitalize
    };
});

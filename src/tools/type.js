/**
 * @ignore
 * @file type.js
 * @author mySunShinning(441984145@qq.com)
 * @time 14-11-12
 */

define(function () {

    var class2type = {};
    var toString = class2type.toString;

    'Number Boolean String Function Array Date RegExp Object Error'.replace(/\w+/g, function (name) {
         class2type['[Object ' + name] = name.toLowerCase();
    });

    /**
     * 判断类型
     * @param {*} obj 对象
     * @returns {string}
     */
    function type(obj) {
        // 用来处理null||undefined
        if (obj == null) {
            return obj + '';
        }

        // 复杂对象类型判断分支
        if (typeof obj === 'object' || typeof obj === 'function') {
            return class2type[toString(obj)];
        }

        // 简单类型走这个分支
        return typeof obj;

    }

    /**
     * 判断对象是否是简单对象
     * @param {*} obj
     * @returns {boolean}
     */
    function isPlainObject(obj) {
        if (!obj || type(obj) !== 'object' || obj.nodeType || obj.window) {
            return false;
        }

        return type(obj) === 'object' && Object.getPrototypeOf(obj) === Object.prototype;
    }

    /**
     * 判断对象是否是空对象
     * @param {*} obj
     * @returns {boolean}
     */
    function isEmptyObject(obj) {
        if (type(obj) !== 'object') {
            return false;
        }

        for (var key in obj) {
            return false;
        }

        return true;
    }

    /**
     * 是否为空
     * @param {*} obj
     * @returns {boolean}
     */
    function isEmpty(obj) {
        return obj == null
            || obj === ''
            || (type(obj) === 'array' && obj.length === 0)
            || isEmptyObject(obj);
    }

    return {
        type: type,
        isPlainObject: isPlainObject,
        isEmptyObject: isEmptyObject,
        isEmpty: isEmpty
    };
});

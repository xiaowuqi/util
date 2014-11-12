/**
 * @ignore
 * @file extend.js
 * @author mySunShinning(441984145@qq.com)
 * @time 14-11-12
 */

define(function (require) {

    var type = require('./type').type;
    var isPlainObject = require('./type').isPlainObject;

    /**
     * 合并对象
     * @param {boolean} [deep] 是否深度合并
     * @param {*} target 目标对象
     * @returns {*}
     */
    function extend(deep, target) {
        var isDeep = false;
        var args = [].slice.call(arguments);
        var i = 1;

        if (typeof deep !== 'boolean') {
            target = deep;
        }
        else {
            isDeep = deep;
            i++;
        }

        if (i === args.length) {
            return target;
        }

        for (; i < args.length; i++) {
            var source = args[i];

            for (var key in source) {
                if (source.hasOwnProperty(key) && source[key] !== undefined) {
                    var src = target[key];
                    var copy = source[key];
                    var clone;

                    if (isDeep && (type(copy) === 'array' || isPlainObject(copy))) {
                        if (type(copy) === 'array') {
                            clone = src && type(src) === 'array' ? src : [];
                        }
                        else {
                            clone = src && type(src) === 'object' ? src : {};
                        }

                        target[key] = extend(isDeep, clone, copy);
                    }
                    else {
                        target[key] = copy;
                    }
                }

            }
        }
    }

    return {
        extend: extend
    };
});

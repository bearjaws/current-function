'use strict';

/**
 * @param string - The string to find occurrences in
 * @param searchElements - An array of search elements
 * @param fromIndex - Where to begin searching from
 * @returns {number}
 */
const findFirstOccurrence = (string, searchElements, fromIndex = 0) => {
    let min = string.length;
    for (let i = 0; i < searchElements.length; i += 1) {
        const occ = string.indexOf(searchElements[i], fromIndex);
        if (occ !== -1 && occ < min) {
            min = occ;
        }
    }
    return (min === string.length) ? -1 : min;
};

/**
 * @summary Returns a provided functions name, or the current calling functions name.
 * @param Function|null func - If provided a function, will return its name, if nothing is provided it gets the current function name.
 * @returns {*}
 */
const functionName = (func = null) => {
    if (func) {
        if (func.name) {
            return func.name;
        }
        const result = /^function\s+([\w\$]+)\s*\(/.exec(func.toString());
        return result ? result[1] : '';
    }
    const obj = {};
    Error.captureStackTrace(obj, functionName);
    const {stack} = obj;
    const firstCharacter = stack.indexOf('at ') + 3;
    const lastCharacter = findFirstOccurrence(stack, [' ', ':', '\n'], firstCharacter);
    return stack.slice(firstCharacter, lastCharacter);
};

module.exports = functionName;
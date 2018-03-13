const isHTML = require('./utils/isHTML');
const is = require('./utils/is');
const getType = require('./utils/getType');
const notMsg = require('./utils/notMsg');
const toTestResult = require('./utils/test');

module.exports = function (elem, prop, val) {
    var not = this.isHTML,
        elemValid, domValid, propValid, strValid, regValid, valid, propHyphen, propCamel, cssObject, cssValue, propTest, valTest, pass, msgDOM, msgProp, msgCssValue, msgVal, msg;
    elemValid = isHTML(elem);
    domValid = elemValid ? elem.ownerDocument.documentElement.contains(elem) && elem.ownerDocument.documentElement !== elem : false;
    propValid = is(prop, 'string');
    strValid = is(val, 'string');
    regValid = is(val, 'regexp');
    valid = elemValid && domValid && propValid && (strValid || regValid);
    propHyphen = propValid ? prop.replace(/[A-Z]/g, function (g) { return '-' + g.toLowerCase(); }) : prop;
    propCamel = propValid ? prop.replace(/\x2D\w/g, function (g) { return g[1].toUpperCase(); }) : prop;
    cssObject = elemValid && domValid && propValid ? window.getComputedStyle(elem, null) : cssObject;
    cssValue = cssObject ? cssObject.getPropertyValue(propHyphen) : false;
    propTest = cssObject ? typeof cssObject[propCamel] !== 'undefined' : false;
    valTest = !propTest ? false : strValid ? cssValue === val : regValid ? Boolean(cssValue.match(val)) : false;
    pass = valid && valTest;
    msgDOM = elemValid && !domValid ? " (not a document node)" : "";
    msgProp = !(elemValid && domValid) ? "" : propValid ? "'" + propHyphen + "'" : "[" + getType(prop) + "]";
    msgCssValue = !valid || !propTest ? "" : ", while the computed value is '" + cssValue + "'";
    msgVal = !(propValid && elemValid && domValid) ? "" : strValid ? " of the value '" + val + "'" : regValid ? " of the value matched the regular expression " + val : " of [" + getType(val) + "] value";
    msg = "Expected " + getType(elem) + msgDOM + notMsg(not) + " to have the " + msgProp + " style" + msgVal + msgCssValue;
    return toTestResult(pass, msg, msg);
};
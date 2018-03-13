const isHTML = require('./utils/isHTML');
const is = require('./utils/is');
const getType = require('./utils/getType');
const notMsg = require('./utils/notMsg');
const toTestResult = require('./utils/test');

module.exports = function (elem, attr, val) {
    var not = this.isNot, elemValid, attrValid, attrTest, strValid, regValid, valTest, pass, msgAttr, msgVal, msg;
    elemValid = isHTML(elem);
    attrValid = is(attr, 'string');
    strValid = is(val, 'string');
    regValid = is(val, 'regex');
    attrTest = elemValid && attrValid ? elem.hasAttribute(attr) : false;
    valTest = !attrTest ? false : typeof val === "undefined" ? true : strValid ? elem.getAttribute(attr) === val : regValid ? Boolean(elem.getAttribute(attr).match(val)) : true;
    pass = elemValid && attrValid && (attrTest && valTest);
    msgAttr = !elemValid ? "" : attrValid ? " '" + attr + "'" : ' of type ' + getType(attr);
    msgVal = !elemValid || !attrValid ? "" : strValid ? " of '" + val + "' value " : regValid ? " of value matched regular expression " + val : "";
    msg = "Expected " + getType(elem) + notMsg(not) + " to have an attribute" + msgAttr + msgVal + " specified";
    return toTestResult(pass, msg, msg);
};
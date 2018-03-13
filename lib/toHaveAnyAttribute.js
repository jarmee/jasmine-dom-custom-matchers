const isHTML = require('./utils/isHTML');
const getType = require('./utils/getType');
const notMsg = require('./utils/notMsg');
const toTestResult = require('./utils/test');

module.exports = function (elem) {
    var not = this.isNot, elemValid, argTest, pass, msg;
    elemValid = isHTML(elem);
    argTest = elemValid ? elem.hasAttributes() : false;
    pass = elemValid && argTest;
    msg = "Expected " + getType(elem) + notMsg(not) + " to have any attributes defined";
    return toTestResult(pass, msg, msg);
};
const isHTML = require('./utils/isHTML');
const is = require('./utils/is');
const getType = require('./utils/getType');
const notMsg = require('./utils/notMsg');
const toTestResult = require('./utils/test');

module.exports = function (received, child) {
    var parent = received, 
        not = this.isNot, 
        paramValid, paramTest, pass, msg;
    paramValid = isHTML(parent) && (isHTML(child) || is(child, 'text'));
    paramTest = paramValid ? child.parentElement === parent : false;
    pass = paramValid && paramTest;
    msg = "Expected " + getType(child) + notMsg(not) + " to be the parent element of " + getType(parent);
    return toTestResult(pass, msg, msg);
};
const isHTML = require('./utils/isHTML');
const is = require('./utils/is');
const getType = require('./utils/getType');
const notMsg = require('./utils/notMsg');
const toTestResult = require('./utils/test');

module.exports = function (received, parent) {
    var child = received,
        not = this.isNot,
        paramValid, paramTest, pass, msg;
    paramValid = (isHTML(child) || is(child, 'text')) && isHTML(parent);
    paramTest = paramValid ? child.parentNode === parent : false;
    pass = paramValid && paramTest;
    msg = "Expected " + getType(child) + notMsg(not) + " to be the child element of " + getType(parent);
    return toTestResult(pass, msg, msg);
};

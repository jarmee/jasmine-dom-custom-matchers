const isHTML = require('./utils/isHTML');
const is = require('./utils/is');
const notMsg = require('./utils/notMsg');
const getType = require('./utils/getType');
const toTestResult = require('./utils/test');

module.exports = function (received, childB) {
    var childA = received, not = this.isNot, childAValid, childBValid, valid, parentTest, pass, msg;
    childAValid = isHTML(childA) || is(childA, 'text');
    childBValid = isHTML(childB) || is(childB, 'text');
    valid = childAValid && childBValid;
    parentTest = valid ? childA.parentNode === childB.parentNode : false;
    pass = valid && parentTest;
    msg = "Expected " + getType(childA) + notMsg(not) + " to have the same parent as " + getType(childB);
    return toTestResult(pass, msg, msg);
};
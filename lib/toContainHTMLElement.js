const isHTML = require('./utils/isHTML');
const getType = require('./utils/getType');
const notMsg = require('./utils/notMsg');
const toTestResult = require('./utils/test');

module.exports = function (received, child) {
    var elem = received,         
        not = this.isNot, elemValid, childTest, pass, msg;
    elemValid = isHTML(elem) && isHTML(child);
    childTest = elemValid ? elem.contains(child) && elem !== child : false;
    pass = elemValid && childTest;
    msg = "Expected " + getType(elem) + notMsg(not) + " to contain " + getType(child);
    return toTestResult(pass, msg, msg);

};
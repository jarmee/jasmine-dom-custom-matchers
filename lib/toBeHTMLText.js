const is = require('./utils/is');
const shortenStr = require('./utils/shortenStr');
const getType = require('./utils/getType');
const toTestResult = require('./utils/test');

module.exports = function (received, val) {
    var elemValid, strValid, regValid, strTest, regTest, pass, msgStr, msgReg, msgContent, msgNot, msgFail;
    elemValid = is(received, 'text');
    strValid = is(val, 'string');
    regValid = is(val, 'regexp');
    strTest = elemValid && strValid ? received.textContent === val : true;
    regTest = elemValid && regValid ? Boolean(received.textContent.match(val)) : true;
    pass = elemValid && strTest && regTest;
    msgStr = " of content '" + shortenStr(val) + "'";
    msgReg = " of content matching regular expression " + val;
    msgContent = elemValid && strValid ? msgStr : elemValid && regValid ? msgReg : "";
    msgNot = "Expected " + getType(received) + " not to be the [HTML Text] Object" + msgContent;
    msgFail = "Expected " + getType(received) + " to be the [HTML Text] Object" + msgContent;
    return toTestResult(pass, msgNot, msgFail);
};
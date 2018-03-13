const is = require('./utils/is');
const shortenStr = require('./utils/shortenStr');
const getType = require('./utils/getType');
const toTestResult = require('./utils/test');

module.exports = function (elem, val) {
    var elemValid, strValid, regValid, strTest, regTest, pass, msgStr, msgReg, msgContent, msgNot, msgFail;
    elemValid = is(elem, 'text');
    strValid = is(val, 'string');
    regValid = is(val, 'regexp');
    strTest = elemValid && strValid ? elem.textContent === val : true;
    regTest = elemValid && regValid ? Boolean(elem.textContent.match(val)) : true;
    pass = elemValid && strTest && regTest;
    msgStr = " of content '" + shortenStr(val) + "'";
    msgReg = " of content matching regular expression " + val;
    msgContent = elemValid && strValid ? msgStr : elemValid && regValid ? msgReg : "";
    msgNot = "Expected " + getType(elem) + " not to be the [HTML Text] Object" + msgContent;
    msgFail = "Expected " + getType(elem) + " to be the [HTML Text] Object" + msgContent;
    return toTestResult(pass, msgNot, msgFail);
};
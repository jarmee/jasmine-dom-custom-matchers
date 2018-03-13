const isHTML = require('./utils/isHTML');
const is = require('./utils/is');
const shortenStr = require('./utils/shortenStr');
const getType = require('./utils/getType');
const notMsg = require('./utils/notMsg');
const toTestResult = require('./utils/test');

module.exports = function (received, text) {
    var elem = received,        
        not = this.isNot,
        elemValid, strValid, regValid, parseText, textTest, paramValid, pass, msgStr, msgReg, msgUnvalid, msgText, msg;
    elemValid = isHTML(elem);
    strValid = is(text, 'string');
    regValid = is(text, 'regexp');
    paramValid = elemValid && (strValid || regValid);
    parseText = elemValid ? elem.textContent.replace(/(\n|\t|\v)/g, " ").replace(/\s\s+/g, " ").replace(/^\s/, "") : parseText;
    textTest = paramValid ? Boolean(parseText.match(text)) : false;
    pass = paramValid && textTest;
    msgStr = "'" + shortenStr(text) + "'";
    msgReg = "regular expression " + text;
    msgUnvalid = getType(text) + " while text or regular expression was expected";
    msgText = strValid ? msgStr : regValid ? msgReg : msgUnvalid;
    msg = "Expected " + getType(elem) + notMsg(not) + " to contain " + msgText;
    return toTestResult(pass, msg, msg);
};
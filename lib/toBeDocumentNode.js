const isHTML = require('./utils/isHTML');
const is = require('./utils/is');
const getType = require('./utils/getType');
const notMsg = require('./utils/notMsg');
const toTestResult = require('./utils/test');

module.exports = function (received) {        
    let elem = received, 
        not = this.isNot,
        elemValid, domTest, pass, msgDOM, msg;    
    elemValid = isHTML(elem) || is(elem, 'text');        
    domTest = elemValid ? elem.ownerDocument.documentElement.contains(elem) : false;
    pass = elemValid && domTest;
    msgDOM = elemValid && !domTest ? " (not a document node)" : "";
    msg = "Expected " + getType(elem) + msgDOM + notMsg(not) + " to be the document node";    
    return toTestResult(pass, msg, msg);
};
const isHTML = require('./utils/isHTML');
const getType = require('./utils/getType');
const notMsg = require('./utils/notMsg');
const toTestResult = require('./utils/test');
module.exports = function (sibA, sibB) {
    var not = this.isNot, 
        sibValid, prev, prevTest, pass, msgPrev, msgNull, msgAdd, msg;
    sibValid = isHTML(sibA) && isHTML(sibB);
    prev = sibValid ? sibB.previousElementSibling : prev;
    prevTest = sibValid ? prev === sibA : false;
    pass = sibValid && prevTest;
    msgPrev = " while previous sibling is " + getType(prev);
    msgNull = " while " + getType(sibB) + " has not got previous sibling element";
    msgAdd = not ? "" : prev ? msgPrev : sibValid ? msgNull : "";
    msg = "Expected " + getType(sibA) + notMsg(not) + " to be previous sibling of " + getType(sibB) + msgAdd;
    return toTestResult(pass, msg, msg);
};
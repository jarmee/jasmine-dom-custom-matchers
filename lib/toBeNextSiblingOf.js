const isHTML = require('./utils/isHTML');
const getType = require('./utils/getType');
const notMsg = require('./utils/notMsg');
const toTestResult = require('./utils/test');
module.exports = function (sibA, sibB) {
    var not = this.isNot,
        sibValid, next, nextTest, pass, msgNext, msgNull, msgAdd, msg;
    sibValid = isHTML(sibA) && isHTML(sibB);
    next = sibValid ? sibB.nextElementSibling : next;
    nextTest = sibValid ? next === sibA : false;
    pass = sibValid && nextTest;
    msgNext = " while next sibling is " + getType(next);
    msgNull = " while " + getType(sibB) + " has not got next sibling element";
    msgAdd = not ? "" : next ? msgNext : sibValid ? msgNull : "";
    msg = "Expected " + getType(sibA) + notMsg(not) + " to be next sibling of " + getType(sibB) + msgAdd;
    return toTestResult(pass, msg, msg);
};
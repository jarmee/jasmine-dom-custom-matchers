const isHTML = require('./utils/isHTML');
const is = require('./utils/is');
const getType = require('./utils/getType');
const notMsg = require('./utils/notMsg');
const toTestResult = require('./utils/test');

module.exports = function (elem, clss) {
    var not = this.isNot, elemValid, clssValid, valid, clssTest, pass, msgAdd, msg;
    elemValid = isHTML(elem);
    clssValid = is(clss, 'string');
    valid = elemValid && clssValid;    
    clssTest = valid ? hasClass(elem) : false;
    pass = valid && clssTest;
    msgAdd = !elemValid ? "" : clssValid ? " '" + clss + "'" : " of type " + getType(clss);
    msg = "Expected " + getType(elem) + notMsg(not) + " to have class" + msgAdd;
    return toTestResult(pass, msg, msg);

    function hasClass(elem) {
        var attr = elem.getAttribute('class');
        var collection = attr !== null && attr.replace(/\s\s+/g, "") !== "" ? attr.split(" ") : [];
        var classTest = collection.some(function (c) { return c === clss; });
        return classTest;
    }
};
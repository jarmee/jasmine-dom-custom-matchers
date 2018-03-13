const isHTML = require('./utils/isHTML');
const is = require('./utils/is');
const getType = require('./utils/getType');
const toTestResult = require('./utils/test');

module.exports = function (received, tag) {
    var elemValid, tagValid, newTag, tagTest, pass, msgTag, msgNot, msgFail;

    elemValid = isHTML(received);
    tagValid = is(tag, 'String');
    newTag = tagValid ? tag.replace(/\W/g, '') : '';
    tagTest = elemValid && newTag.length ? received.nodeName === newTag.toUpperCase() : true;
    pass = elemValid && tagTest;
    msgTag = newTag ? '<' + newTag.toLowerCase() + '>' : 'HTML';
    msgNot = "Expected " + getType(received) + " not to be a " + msgTag + " Element";
    msgFail = "Expected " + getType(received) + " to be a " + msgTag + " Element";
    return toTestResult(pass, msgNot, msgFail);
};
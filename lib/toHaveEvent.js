const isHTML = require('./utils/isHTML');
const is = require('./utils/is');
const getType = require('./utils/getType');
const notMsg = require('./utils/notMsg');
const toTestResult = require('./utils/test');

module.exports = function (elem, evnt) {
    var not = this.isNot, 
        elemValid, evntValid, valid, getEvnt, evntTest, evntExist, pass, msgEvent, msg;
    elemValid = isHTML(elem);
    evntValid = is(evnt, 'string');
    valid = elemValid && evntValid;
    getEvnt = evntValid ? parseEvent(evnt) : evnt;
    evntTest = elemValid ? Boolean(elem[getEvnt]) : false;
    evntExist = elemValid ? typeof elem[getEvnt] !== 'undefined' : false;
    pass = not ? valid && evntExist && !evntTest : valid && evntExist && evntTest;
    msgEvent = !elemValid ? "" : !evntExist ? "unrecognized " : getEvnt;
    msg = "Expected " + getType(elem) + notMsg(not) + " to have " + msgEvent + " event attached";
    return toTestResult(pass, msg, msg);

    function parseEvent(ev) {
        ev = ev.replace(/\s/g, "").toLowerCase();
        return ev.search('on') === 0 ? ev : 'on' + ev;
    }
};
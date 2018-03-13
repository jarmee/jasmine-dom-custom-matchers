const isHTML = require('./utils/isHTML');
const is = require('./utils/is');
const getType = require('./utils/getType');
const notMsg = require('./utils/notMsg');
const toTestResult = require('./utils/test');

module.exports = function (received, num, op) {
    var parent = received,
        not = this.isNot,
        getOp, ops, parentValid, opValid, msg, msgAdd, msgNum, msgOperator, pass, numTest, numValid;
    ops = [/\s*or\s*more\s*/i, /\s*or\s*less\s*/i, /\s*more\s*than\s*/i, /\s*less\s*than\s*/i];
    parentValid = isHTML(parent);
    opValid = ops.some(findOperator);
    numValid = parentValid ? is(num, 'Number') && num >= 0 : false;
    numTest = parentValid ? numValid ? checkEquality() : parent.children.length > 0 : false;
    pass = parentValid && numTest;
    msgOperator = [' or more ', ' or less', 'more than ', 'less than '];
    msgNum = getOp > 1 ? msgOperator[getOp] + num : getOp <= 1 ? num + msgOperator[getOp] : num;
    msgNum = numValid ? msgNum + ' child node(s)' : 'any child node';
    msgAdd = parentValid ? " when it contains " + parent.children.length + " child node(s)." : ".";
    msg = "Expected " + getType(parent) + notMsg(not) + " to contain " + msgNum + msgAdd;
    return toTestResult(pass, msg, msg);

    function findOperator(val, ind) {
        var returned = typeof op === 'string' ? Boolean(op.match(val)) : false;
        getOp = returned !== false ? ind : getOp;
        return returned;
    }

    function checkEquality() {
        var l = parent.children.length, r = num, eq = [l >= r, l <= r, l > r, l < r];
        return !opValid ? l === r : eq[getOp];
    }

};
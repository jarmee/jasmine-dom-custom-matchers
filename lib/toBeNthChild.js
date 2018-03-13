const isHTML = require('./utils/isHTML');
const is = require('./utils/is');
const getType = require('./utils/getType');
const notMsg = require('./utils/notMsg');
const toTestResult = require('./utils/test');

module.exports = function (received, index) {    
        var elem = received,
            not = this.isNot,
            elemValid, numValid, strValid, valid, children, indexTest, pass, msgIndex, msgNotParent, msgActualInd, msgAdd, msg;
        elemValid = isHTML(elem);
        numValid = is(index, 'number') ? index >= 0 : false;
        strValid = is(index, 'string') ? Boolean(index.match(/\s*last\s*/i)) : false;
        valid = elemValid && (numValid || strValid);
        children = elemValid ? isHTML(elem.parentNode) ? elem.parentNode.children : [] : [];
        indexTest = !elemValid ? false : numValid ? elem === children[index] : strValid ? elem === children[children.length - 1] : false;
        pass = valid && indexTest;
        msgIndex = findIndex();
        index = numValid ? index + 1 : strValid ? "'" + index + "'" : "[incorrect index value]";
        msgNotParent = " while " + getType(elem) + " has not got parent Element";
        msgActualInd = " while it is " + msgIndex + ending(msgIndex) + " child node of its parent Element";
        msgAdd = !elemValid ? "" : msgIndex === null ? msgNotParent : msgActualInd;
        msg = "Expected " + getType(elem) + notMsg(not) + " to be " + index + ending(index) + " child node of its parent" + msgAdd;
        return toTestResult(pass, msg, msg);

        function findIndex() {
            for (var i = 0; i < children.length; i++) if (elem === children[i]) return i + 1;
            return null;
        }

        function ending(n) {
            return n === 1 ? "st" : n === 2 ? "nd" : n === 3 ? "rd" : typeof n === 'number' ? "th" : "";
        }
  
};
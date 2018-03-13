const isHTML = require('./utils/isHTML');
const getType = require('./utils/getType');
const notMsg = require('./utils/notMsg');
const toTestResult = require('./utils/test');

module.exports = function (elem) {

    var elemValid, not = this.isNot, childNodes, emptyTest, pass, msgAdd, msg;
    elemValid = isHTML(elem);
    childNodes = elemValid ? collection() : [];
    emptyTest = !childNodes.length;
    pass = elemValid && emptyTest;
    msgAdd = emptyTest ? "" : " while it contains " + childNodes.length + " node(s)";
    msg = "Expected " + getType(elem) + notMsg(not) + " to be empty" + msgAdd;
    return toTestResult(pass, msg, msg);

    function collection() {
        var nodes = elem.childNodes, parsed = [];
        for (var i = 0; i < nodes.length; i++) {
            if (isHTML(nodes[i])) {
                if (nodes[i].nodeName !== "BR" && nodes[i].nodeName !== "WBR") parsed.push(nodes[i]);
            }
            if (nodes[i].nodeName === '#text') {
                if (nodes[i].textContent.replace(/(\s|\n|\t|\v)/g, "").length) parsed.push(nodes[i]);
            }
        }
        return parsed;
    }

};
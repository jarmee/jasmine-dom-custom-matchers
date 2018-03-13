const is = require('./is');

module.exports = (getElem) => {
    if (getElem === null || typeof getElem === "undefined") return false;
    return is(getElem, "html")
        && is(getElem, "element");
};
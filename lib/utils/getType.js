const isHTML = require('./isHTML');

module.exports = (getValue) => {    
    if (isHTML(getValue)) {
        var id = getValue.id;
        var ret = id.length ? "#" + id : "";
        return getValue.tagName + ret;
    } else {
        return getValue === null ? 'null' : typeof getValue === "undefined" ? 'undefined' : getValue.constructor.name;
    }
};
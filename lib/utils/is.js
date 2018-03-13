module.exports = (getObject, getType) => {
    if (getObject === null || typeof getObject === "undefined") return false;
    return getObject.constructor.toString().toLowerCase().search(getType.toLowerCase()) >= 0;
}
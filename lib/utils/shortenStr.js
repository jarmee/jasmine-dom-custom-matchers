module.exports = (getValue) => {
    if (typeof getValue === 'string') {
        return getValue.length > 50 ? getValue.slice(0, 50) + "..." : getValue;
    } else {
        return getValue;
    }
};
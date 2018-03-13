module.exports = (condition, messageNot, messageFail) => {
    return {
        pass: condition,
        message: () => condition ? messageNot : messageFail
    };
};
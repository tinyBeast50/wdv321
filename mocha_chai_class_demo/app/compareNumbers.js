const compareNumbers = (a, b) => {
if (!Number.isInteger(a)){
    return "Please enter a number in Value 1"
}
    if(a === b) {
    return "The amounts are equal";
}

return (a > b) ? a : b;
}

module.exports = { compareNumbers };
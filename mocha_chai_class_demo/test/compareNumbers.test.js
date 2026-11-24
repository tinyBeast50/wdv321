const { expect } = require('chai');
const { compareNumbers } = require("../app/compareNumbers.js")

describe('compareNumbers', () => {
    
    it('should return the large of the two numbers', () => {
        const result = compareNumbers(5, 6);

        expect(result).to.equal(6);
    });


it('should return the large of the two numbers', () => {
        const result = compareNumbers(4, 3);

        expect(result).to.equal(4);
    });


    it('should return amounts are equal', () => {
        const result = compareNumbers(3, 3);

        expect(result).to.equal("The amounts are equal");
    });


    it('should return Please enter a number in Value 1', () => {
        const result = compareNumbers("a", 5);

        expect(result).to.equal("Please enter a number in Value 1");
    });

    it('should return Please enter a number in Value 2', () => {
        const result = compareNumbers(5, "a");

        expect(result).to.equal("Please enter a number in Value 2");
    });

    it('should return an error for an empty Value 1', () => {
        const result = compareNumbers("", 5);

        expect(result).to.equal("Please enter a number in Value 1");
    });

    it('should return an error for an empty Value 2', () => {
        const result = compareNumbers(5, "");

        expect(result).to.equal("Please enter a number in Value 2");
    });

    it('should return the larger number when using a negative number', () => {
        const result = compareNumbers(-1, 5);

        expect(result).to.equal(5);
    });

    it('should return Please enter a number in Value 1', () => {
        const result = compareNumbers(3/4, 1);

        expect(result).to.equal(1);
    });

    it('should reject a number containing a letter', () => {
        const result = compareNumbers("5b", 3);

        expect(result).to.equal("Please enter a number in Value 1");
    });
});
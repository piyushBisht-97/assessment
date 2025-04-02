const stringCalculator = require("./stringCalculator")

test("Will retun 0 if input is an empty string ",()=>{
    expect(stringCalculator("")).toBe(0)
})

test("Will return 'negative numbers not allowed' if input contains a negative number", () => {
    expect(() => stringCalculator("1,-5")).toThrow("Negative numbers not allowed");
});


test("Should return sum of input string",()=>{
    expect(stringCalculator("1,7")).toBe(8)
})

test("Supports multiple delimiter",()=>{
    expect(stringCalculator("//;\n1;2")).toBe(3)
})
const stringCalculator = require("./stringCalculator")

test("Will retun 0 if input is an empty string ",()=>{
    expect(stringCalculator("")).toBe(0)
})

test("Will return negative numbers not allowed if input is negative number",()=>{
    expect(stringCalculator("1,-5")).toBe("negative numbers not allowed")
})
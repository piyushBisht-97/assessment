 function stringCalculator(numbers){
    const separtors = /,|\n/

    const data = numbers.split(separtors).map((item)=>Number(item))
    const check = data.filter((item)=>item<0)
    if(check.length){
        return "negative numbers not allowed"
    }
    const result = data.reduce((acc,curr) =>acc+curr,0)
return result    
}


module.exports = stringCalculator;

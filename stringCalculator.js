function stringCalculator(numbers){
if(!numbers) return 0

    let delimiter = /,|;|\n/;
   if (numbers.startsWith("//")) {
       const parts = numbers.split("\n")
       delimiter = new RegExp(parts[0].substring(2))
       numbers = parts.slice(1).join("\n")
   }
    console.log("asdf",numbers)
   const data = numbers.split(delimiter).map((item)=>Number(item))
   const check = data.filter((item)=>item<0)
   if(check.length){
    throw new Error(`Negative numbers not allowed: ${check.join()}`);
}
   const result = data.reduce((acc,curr) =>acc+curr,0)
return result    
}


module.exports = stringCalculator;

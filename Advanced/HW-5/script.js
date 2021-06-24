// function getRandomArray(length, min, max) {
//     let arr = [];
//     for(let i = 0; i < length; i++) {
//         arr[i] = Number((min + (Math.random() * (max-min))).toFixed(0));
//     }
//     return arr;
// }
// console.log("1. " + getRandomArray(10, 1, 10));

// function getModa() {
//     let argArray = [];
//     for(let i = 0; i < arguments.length; i++) {
//         argArray[i] = arguments[i];
//     }
//     argArraySort = [];
//     for(let i = 0; i < arguments.length; i++) {
//         argArraySort[i] = argArray.filter(item => arguments[i] === item);
//         argArray = argArray.filter(item => arguments[i] !== item);
//     }
//     argArraySort = argArraySort.filter(item => item.length !== 0);
//     let argArraySortLengthItem = [];
//     for(let i = 0; i < argArraySort.length; i++)
//     {   
//         argArraySortLengthItem[i] = argArraySort[i].length;
//     }
//     let maxValue = Math.max.apply(null, argArraySortLengthItem);
//     for(let i = 0; i < argArraySortLengthItem.length; i++)
//     {
//         if(argArraySort[i].length === maxValue) return "Mode number: " + argArraySort[i][0] + ", mode = " + maxValue;
//     }
// }
// console.log("2. " + getModa(1,2,2,2,2,2,3,1,1,5,5,5,5,5,5,5,5,5,5,5,5,5,5));

// function getAverage() {
//     let sum = 0;
//     let NotInteger = 0;
//     for(let i = 0; i < arguments.length; i++)
//     {
//         if(Number.isInteger(arguments[i])) sum += arguments[i];
//         else NotInteger++;
//     }
//     return sum / (arguments.length - NotInteger);
// }
// console.log("3. " + getAverage(0.5,0.5,1,2));

// function getMedian() {
//     let arrayNumbers = [];
//     for(let i = 0; i < arguments.length; i++) {
//         arrayNumbers[i] = arguments[i];
//     }
//     arrayNumbers = arrayNumbers.filter(item => { return Number.isInteger(item) }).sort((a, b) => a - b);
//     if(arrayNumbers.length % 2 === 0) {
//         return (arrayNumbers[(arrayNumbers.length/2) -1] + arrayNumbers[(arrayNumbers.length/2)]) / 2;
//     } else {
//         return arrayNumbers[(arrayNumbers.length-1) / 2];
//     }
    
// }
// console.log("4. " + getMedian(8,3,5,1,12,9, 100, 129));

// function filterEvenNumbers() {
//     let arrayNumbers = [];
//     for(let i = 0; i < arguments.length; i++) {
//         arrayNumbers[i] = arguments[i];
//     }
//     arrayNumbers = arrayNumbers.filter(item => { return Number.isInteger(item) });
//     return arrayNumbers.filter(item => { return item % 2 })
// }
// console.log("5. " + filterEvenNumbers(1,2,3,4,5,6,7,8));

// function countPositiveNumbers() {
//     let arrayNumbers = [];
//     for(let i = 0; i < arguments.length; i++) {
//         arrayNumbers[i] = arguments[i];
//     }
//     arrayNumbers = arrayNumbers.filter(item => { return Number.isInteger(item) });
//     return arrayNumbers.filter(item => { return item > 0 })
// }
// console.log("6. " + countPositiveNumbers(1,-7,-9,7,8, -1, 1, -10));

// function getDividedByFive() {
//     let arrayNumbers = [];
//     for(let i = 0; i < arguments.length; i++) {
//         arrayNumbers[i] = arguments[i];
//     }
//     arrayNumbers = arrayNumbers.filter(item => { return Number.isInteger(item) });
//     return arrayNumbers.filter(item => { return item % 5 === 0 })
// }
// console.log("7. " + getDividedByFive(1,2,3,4,5,6,7,8, 55));

// const BAD_WORD = ["fuck", "shit"];
// function replaceBadWords(string) 
// {
//     let arrWords = string.split(" ").filter((word, i, words) => { 
//         wordUpper = word.toUpperCase();
//         for(let badWord of BAD_WORD) {
//             badWordUpper = badWord.toUpperCase();
//             if(wordUpper.includes(badWordUpper)) {
//                 return true;
//             }
//         }
//     })
//     let result = string.split(" ");
//     for(let i = 0; i < arrWords.length; i++) {
//         let index = result.indexOf(arrWords[i])
//         wordUpper = result[index].toUpperCase();
//         for(let badWord of BAD_WORD) {
//             badWordUpper = badWord.toUpperCase();
//             if(wordUpper.includes(badWordUpper)) {
//                 let star = badWordUpper.replace(/[^\s]/g, "*");
//                 result[index] = star + wordUpper.split(badWordUpper)[1].toLowerCase();
//             }
//         }
         
//     }
//     return result.join(" ");

// }
// console.log("8. " + replaceBadWords("Holy fucking shit! shit Shit"));

// function divideByThree(word) {
//     let regex = /\w{1,3}/gi;
//     let result = word.match(regex) || [];
//     return result;
// }
// console.log(divideByThree("Vladimir"));

function fn(e) {
    e = e.split("");
    let g = []
    for (g, b = e.length, h = Math.pow(b, b - 2);; h++) {
        let d = h.toString(b),
            c = d.length;
            if (c > b) break;
            c < b && (d = 0 + d);
            let f = "";
            for (c = 0; c < b; c++) a = parseInt(d[c], b), f += e[a];
            e.every(function(b) {
                return 0 <= f.indexOf(b)
            }) && g.push(f)
    }    
    return g;
};
console.log(fn("man"));

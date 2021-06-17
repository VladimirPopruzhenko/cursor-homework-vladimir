function getMaxDigits(number) {
    let numberMax = Math.max.apply(null, ((String(number)).split('').filter((number) => {
        if (number.charCodeAt() >= 48 && number.charCodeAt() <= 57) return Number(number)
    })));
    const MAX_NUMBER = !isFinite(numberMax)? "ошибка вычислений" : numberMax;
    return (!isNaN(MAX_NUMBER) || !isFinite(MAX_NUMBER)) ? MAX_NUMBER : "ошибка вычислений";
}
console.log("1. Самое большое число: ", getMaxDigits(prompt("Введите число:")));

function getIntegerPower(number) {
    number = Number(number);
    if (!isNaN(number) == true && number != null) {
        let number_ = 2;
        let power = 0;
        while(number_ < number) {
            number_ = 2;
            for (let i = 0; i < power; i++) {
                number_ *= 2;
            }
            power++;
        } 
        if(number_ == number) { return `log₂${number} = ` + power }
        else { return `Число ${number} имеет не целочисленную степень`}
    }
    else { return "Не верный формат" }
}
console.log(getIntegerPower(prompt("2. log₂x \nВведите x = ")));

function getFormaterWord(str) {
    return str[0].charAt(0).toUpperCase() +  str.slice(1).toLowerCase();
}
console.log("3. " + getFormaterWord(prompt("Введите слово:")));

function getRemainder(number) {
    return (!isNaN(number) && number != "")?  (Number(number) * 80.5) / 100 : "Не правильный формат!";
}
console.log("4. Остаток = " + getRemainder(prompt("Введите сумму:")));

function getRandom(n, m) {
    if(!isNaN(Number(n)) == !isNaN(Number(m)))
    {
        n = Number((Number(n)).toFixed(0));
        m = Number((Number(m)).toFixed(0));
        if(!isNaN(n) && !isNaN(m)) {
            let randomValue =  Number((Number((String(Number(new Date())).split("")).pop()) * 0.1).toFixed(1));
            return n + (randomValue * (m - n));
        } else {
            return "Не верный формат!";
        } 
    } 
    else {
        return "Не верный формат!";
    } 
}
let x = prompt("Введите нижнюю границу n:");
let y = prompt("Введите верхнюю границу m:");
console.log("5. Рандомное число от " + x + " до " + y + " = " + getRandom(x, y));

function countLetter(letters) {
    let result = "6. В строке " + letters + ":\n"
    letters = letters.split("");
    let uniqueLetter = [0];
    let i = 0;
    let length = letters.length;
    while(i < length) {
        uniqueLetter[i] = letters.filter((word, index, arr) => {
            return word == letters[0];
        });
        letters = letters.filter((word, index, arr) => {
            return word != letters[0];
        });
        i++;
    }
    uniqueLetter = uniqueLetter.filter((arr, index, arrs) => {
        return arr.length > 0;
    })
    for(let i = 0; i< uniqueLetter.length; i++) {
        result += "'" + uniqueLetter[i][0] + "'" + " встречаеться " + uniqueLetter[i].length + " раз\n"; 
    }
    return result;
}
console.log(countLetter(prompt("Введите строку:")));

function convertCurrency(value) {
    let valute = value.split("$");
    let countValuteDollar = (valute.filter(v => { return "$" === v }).lenght == 0) ? false : true;
    valuteCorrect = (!isNaN(valute[0]) && valute[0] != "") ? true : false;
    if(valuteCorrect && countValuteDollar && valute[1] === "")
    {
        let number = Number(valute[0]) * 28;
        return valute[0] + "$ = " + number + "UAH";
    } else {
        let valute = value.split("UAH");
        let countValuteUAH = (valute.filter(v => { return "UAH" === v }).lenght == 0)? false : true;
        valuteCorrect = (!isNaN(valute[0]) && valute[0] != "")? true : false;
        if(valuteCorrect && countValuteUAH && valute[1] === "") {
            let number = Number(valute[0]) / 28;
            return valute[0] + "UAH = " + number + "$";
        }
        else {
            return "Не верный формат!";
        }
    }
}
console.log("7. " + convertCurrency(prompt("Введите сумму:")));

function randomPassword(lenght) {
    let result = "8. Ваш пароль: ";
    if(lenght == 0 || lenght== "" || lenght == null) {
        for(let i = 0; i < 8; i++) {
            result += Math.round(Math.random(0, 9) * 10);
        }
        return result;
    } else {
        let len = Number(lenght);
        if(!isNaN(len)) {
            for(let i = 0; i < len; i++) {
                result += Math.round(Math.random(0, 9) * 10);
            }
            return result;
        }
        else {
            return "Не верный формат!";
        }
    }
}
console.log(randomPassword(prompt("Введите количсетво цифр:")));

function deleteLetters(letter, letters) {
    return ((letters.split("")).filter(l => {
        return l != letter;
    })).join("");
}
console.log("9. " + deleteLetters(prompt("Введите букву которую нужно удалить:"), prompt("Введите строку:")));

function isPalyndrom(string) {
    let first = string;
    let second = string.split("").reverse().join("");
    if(first == second) { return true; }
    else { return false; }
}
console.log("10. " + isPalyndrom(prompt("Введите слово:")));

function deleteDuplicateLetter(string) {
    letters = string.split("");
    let length = letters.length;
    let uniqueLetter = [0];
    let i = 0;
    while(i < length) {
        uniqueLetter[i] = letters.filter((word, index, arr) => {
            return word == letters[i];
        });
        if(uniqueLetter[i].length > 1) {
            letters = letters.filter((word, index, arr) => {
                return word != uniqueLetter[i][0];
            });
        }
        i++;
    }
    uniqueLetter = uniqueLetter.filter((arr, index, arrs) => {
        return arr.length > 0;
    })
    return letters.join("");
}
console.log("11. " + deleteDuplicateLetter(prompt("Введите слово:")));
let n = null, m = null;
let menu = () => {
    while(!(typeof(n) === "number")) {
        n = questionBlockSwitch(isNumberInt(firstQuestion()));
    }
    while(!(typeof(m) === "number")) {
        m = questionBlockSwitch(isNumberInt(secondQuestion()));
    }
    result(pairingQuestion()? sumPairing(n, m, false) : sumPairing(n, m, true));
}
let firstQuestion = () => {
    return prompt("Введите целочисленное значение N:")
}
let secondQuestion = () => {
    return prompt("Введите целочисленное значение M:")
}
let pairingQuestion = () => {
    return confirm("Учитывать парные числа?");
}
let isNumberInt = (value) => {
    if(isNaN(value) || !value) {
        return false;
    } else if(Number.isInteger(Number(value))) {
         return Number(value);
    }
}
let questionBlockSwitch = (value) => {
    if (typeof(value) == "number") {
        return value;    
    } else {
        alert("Введите целое число!");
    }
}
let sumPairing = (n, m, withOfWithout) => {
    let max = Math.max(n,m);
    let min = Math.min(n,m);
    let sum = 0;
    if(withOfWithout) {
        for(let i = min; i <= max; i++) {
            if(!(i % 2 === 0)) sum += i;
        }
    }
    else {
        for(let i = min; i <= max; i++) {
            sum += i;
        }
    }
    return sum;
}
let result = (value) => {
    alert("Результат: " + value);
}
menu();
let N = null, M = null;
function Menu() {
    while(!(typeof(N) === "number")) {
        N = QuestionBlockSwitch(isNumberInt(FirstQuestion()));
    }
    while(!(typeof(M) === "number")) {
        M = QuestionBlockSwitch(isNumberInt(SecondQuestion()));
    }
    Result(PairingQuestion() ? SumWithPairing(N, M) : SumWithoutPairing(N, M));
    N = null;
    M = null;
}
function FirstQuestion() {
    return prompt("Введите целочисленное значение N:")
}
function SecondQuestion() {
    return prompt("Введите целочисленное значение M:")
}
function PairingQuestion() {
    return confirm("Учитывать парные числа?");
}
function isNumberInt(value) {
    if(Number(value) === NaN || Number(value) === undefined) {
        return false;
    } else if(Number.isInteger(Number(value))) {
         return Number(value);
    }
}
function QuestionBlockSwitch(value) {
    switch (typeof(value)) {
        case "number":
            return value;    
        default:
            alert("Введите целое число!");
    }
}
function SumWithPairing(n, m) {
    let max = Math.max(n,m);
    let min = Math.min(n,m);
    let sum = 0;
    for(let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
}
function SumWithoutPairing(n, m) {
    let max = Math.max(n,m);
    let min = Math.min(n,m);
    let sum = 0;
    for(let i = min; i <= max; i++) {
        if(!(n % 2 === 0)) sum += i++;
    }
    return sum;
}
function Result(value) {
    alert("Результат: " + value);
}

Menu();
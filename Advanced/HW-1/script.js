let Razer = 15.678;
let DivRazer = document.createElement('div');
DivRazer.innerHTML = "<p>Razer: " + Razer + "</p>";
document.body.append(DivRazer);

let Jbl = 123.965;
let DivJbl = document.createElement('div');
DivJbl.innerHTML = "<p>Jbl: " + Jbl + "</p>";
document.body.append(DivJbl);

let A4Tech = 90.2345;
let DivA4Tech = document.createElement('div');
DivA4Tech.innerHTML = "<p>A4Tech: " + A4Tech + "</p>";
document.body.append(DivA4Tech);

Math.Razer = Razer;
Math.Jbl = Jbl;
Math.A4Tech = A4Tech;

//Выводим наибольшее значение
let MaxValue = Math.max(Math.Razer, Math.Jbl, Math.A4Tech);
let DivMaxValue = document.createElement('div');
DivMaxValue.innerHTML = "<p>Максимальное число: " + MaxValue + "</p>";
document.body.append(DivMaxValue);

//Выводим наименьшее значение
let MinValue = Math.min(Math.Razer, Math.Jbl, Math.A4Tech);
let DivMinValue = document.createElement('div');
DivMinValue.innerHTML = "<p>Минимальное число: " + MinValue + "</p>";
document.body.append(DivMinValue);

//Выводим сумму
let SumValue = Math.Razer + Math.Jbl + Math.A4Tech;
let DivSumValue = document.createElement('div');
DivSumValue.innerHTML = "<p>Сумма: " + SumValue + "</p>";
document.body.append(DivSumValue);

//Округление(в меньшую сторону) и сложение
let RoundingSumValue = Math.floor(Math.Razer) + Math.floor(Math.Jbl) + 
Math.floor(Math.A4Tech);
let DivRoundingSumValue = document.createElement('div');
DivRoundingSumValue.innerHTML = "<p>Округляем и складываем: " + 
RoundingSumValue + "</p>";
document.body.append(DivRoundingSumValue);

function Rounding(value, bitPower) {
    let bitness = Math.pow(10, bitPower);
    return Math.round(value / bitness) * bitness;
}

//Округляем сумму до сотен
let RoundSumToHundreds = Rounding(RoundingSumValue, 2);
let DivRoundSumToHundreds = document.createElement('div');
DivRoundSumToHundreds.innerHTML = "<p>Округленная сумма до сотен: " + 
RoundSumToHundreds + "</p>";
document.body.append(DivRoundSumToHundreds);

function isPaired(value) {
    return (value % 2 === 0) ? true : false;
}

//Парная предыдущая сумма?
let DivIsPairedSum = document.createElement('div');
DivIsPairedSum.innerHTML = "<p>Предыдущая сумма парная - " + 
isPaired(RoundSumToHundreds) + "</p>";
document.body.append(DivIsPairedSum);

//Сдача c 500 грн
let InputValue = 500;
let Surrender = InputValue - SumValue;
let DivSurrender = document.createElement('div');
DivSurrender.innerHTML = "<p>Сдача с " + InputValue + " грн: " + 
Surrender + " грн</p>";
document.body.append(DivSurrender);

//Середнее значение суммы
let AvarageValue = SumValue / 3;
let DivAvarageValue = document.createElement('div');
DivAvarageValue.innerHTML = "<p>Среднее значение: " + 
AvarageValue.toFixed(2) + "</p>";
document.body.append(DivAvarageValue);

//Hard
let RandomValue = Math.random() * 100;
let Price = 750;
let Discount = (Price * RandomValue) / 100;
let NetProfit = (Price / 2) - Discount;
let DivNetProfit = document.createElement('div');
DivNetProfit.innerHTML = "<p>Сумма покупки " + 
Price.toFixed(2) + " грн. Скидка " + RandomValue.toFixed(2) 
+ "%. Чистая прибыль " + NetProfit.toFixed(2) + " грн</p>";
document.body.append(DivNetProfit);

document.writeln(`<br>
<p>Звіт!</p>
<p>Максимальное число: ${MaxValue} </p>
<p>Минимальное число:  ${MinValue} </p>
<p>Сумма: ${SumValue} </p>
<p>Округляем и складываем: ${RoundingSumValue} </p>
<p>Округленная сумма до сотен: ${RoundSumToHundreds} </p>
<p>Предыдущая сумма парная - ${isPaired(RoundSumToHundreds)} </p>
<p>Сдача с ${InputValue} грн: ${Surrender} грн</p>
<p>Среднее значение: ${AvarageValue.toFixed(2)} </p>
<p>Сумма покупки ${Price.toFixed(2)} грн. Скидка 
${RandomValue.toFixed(2)}%. Чистая прибыль 
${NetProfit.toFixed(2)} грн</p>`)
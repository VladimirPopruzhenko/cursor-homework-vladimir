let razer = 15.678;
let divRazer = document.createElement('div');
divRazer.innerHTML = "<p>Razer: " +razer + "</p>";
document.body.append(divRazer);

let jbl = 123.965;
let divJbl = document.createElement('div');
divJbl.innerHTML = "<p>Jbl: " + jbl + "</p>";
document.body.append(divJbl);

let a4Tech = 90.2345;
let divA4Tech = document.createElement('div');
divA4Tech.innerHTML = "<p>A4Tech: " + a4Tech + "</p>";
document.body.append(divA4Tech);

//Выводим наибольшее значение
let maxValue = Math.max(razer, jbl, a4Tech);
let divMaxValue = document.createElement('div');
divMaxValue.innerHTML = "<p>Максимальное число: " + maxValue + "</p>";
document.body.append(divMaxValue);

//Выводим наименьшее значение
let minValue = Math.min(razer, jbl, a4Tech);
let divMinValue = document.createElement('div');
divMinValue.innerHTML = "<p>Минимальное число: " + minValue + "</p>";
document.body.append(divMinValue);

//Выводим сумму
let sumValue = razer + jbl + a4Tech;
let divSumValue = document.createElement('div');
divSumValue.innerHTML = "<p>Сумма: " + sumValue + "</p>";
document.body.append(divSumValue);

//Округление(в меньшую сторону) и сложение
let roundingSumValue = Math.floor(razer) + Math.floor(jbl) + 
Math.floor(a4Tech);
let divRoundingSumValue = document.createElement('div');
divRoundingSumValue.innerHTML = "<p>Округляем и складываем: " + 
roundingSumValue + "</p>";
document.body.append(divRoundingSumValue);

//Округляем сумму до сотен
let roundSumToHundreds = Math.round(roundingSumValue / Math.pow(10, 2)) *  Math.pow(10, 2);;
let divRoundSumToHundreds = document.createElement('div');
divRoundSumToHundreds.innerHTML = "<p>Округленная сумма до сотен: " + 
roundSumToHundreds + "</p>";
document.body.append(divRoundSumToHundreds);

let isPaired = roundSumToHundreds % 2 === 0;

//Парная предыдущая сумма?
let divIsPairedSum = document.createElement('div');
divIsPairedSum.innerHTML = "<p>Предыдущая сумма парная - " + 
isPaired + "</p>";
document.body.append(divIsPairedSum);

//Сдача c 500 грн
let inputValue = 500;
let surrender = inputValue - sumValue;
let divSurrender = document.createElement('div');
divSurrender.innerHTML = "<p>Сдача с " + inputValue + " грн: " + 
surrender + " грн</p>";
document.body.append(divSurrender);

//Середнее значение суммы
let avarageValue = sumValue / 3;
let divAvarageValue = document.createElement('div');
divAvarageValue.innerHTML = "<p>Среднее значение: " + 
avarageValue.toFixed(2) + "</p>";
document.body.append(divAvarageValue);

//Hard
let randomValue = Math.random() * 100;
let price = 750;
let discount = (price * randomValue) / 100;
let netProfit = (price / 2) - discount;
let divNetProfit = document.createElement('div');
divNetProfit.innerHTML = "<p>Сумма покупки " + 
price.toFixed(2) + " грн. Скидка " + randomValue.toFixed(2) 
+ "%. Чистая прибыль " + netProfit.toFixed(2) + " грн</p>";
document.body.append(divNetProfit);

document.writeln(`<br>
<p>Звіт!</p>
<p>Максимальное число: ${maxValue} </p>
<p>Минимальное число:  ${minValue} </p>
<p>Сумма: ${sumValue} </p>
<p>Округляем и складываем: ${roundingSumValue} </p>
<p>Округленная сумма до сотен: ${roundSumToHundreds} </p>
<p>Предыдущая сумма парная - ${isPaired(roundSumToHundreds)} </p>
<p>Сдача с ${inputValue} грн: ${surrender} грн</p>
<p>Среднее значение: ${avarageValue.toFixed(2)} </p>
<p>Сумма покупки ${price.toFixed(2)} грн. Скидка 
${randomValue.toFixed(2)}%. Чистая прибыль 
${netProfit.toFixed(2)} грн</p>`)
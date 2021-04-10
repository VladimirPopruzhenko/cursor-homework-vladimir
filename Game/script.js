var section_ = document.getElementsByClassName('section');
var section_1 = document.getElementsByClassName('section1');
var section_2 = document.getElementsByClassName('section2');
var section_3 = document.getElementsByClassName('section3');
var section_4 = document.getElementsByClassName('section4');
var section_5 = document.getElementsByClassName('section5');
var section_6 = document.getElementsByClassName('section6');
var section_7 = document.getElementsByClassName('section7');
var section_8 = document.getElementsByClassName('section8');

var p = document.getElementsByClassName('play-style-p-p');
var p_ = document.getElementsByClassName('play-style-p-p1');

let arr_buf = [0,0,0,0,0,0,0,0,0];
function drop()
{
  document.getElementById('1').setAttribute('onclick','');
  style = section_[0].setAttribute("style", "background-image: url('null.png')");
  arr_buf[0] = 2;
  if (wins_check() === 2) {
      stop_();
  }
}
function drop1()
{
  document.getElementById('2').setAttribute('onclick','');
  style = section_1[0].setAttribute("style", "background-image: url('null.png')");
  arr_buf[1] = 2;
  if (wins_check() === 2) {
      stop_();
  }
}
function drop2()
{
  document.getElementById('3').setAttribute('onclick','');
  style = section_2[0].setAttribute("style", "background-image: url('null.png')");
  arr_buf[2] = 2;
  if (wins_check() === 2) {
      stop_();
  }
}
function drop3()
{
  document.getElementById('4').setAttribute('onclick','');
  style = section_3[0].setAttribute("style", "background-image: url('null.png')");
  arr_buf[3] = 2;
  if (wins_check() === 2) {
      stop_();
  }
}
function drop4()
{
  document.getElementById('5').setAttribute('onclick','');
  style = section_4[0].setAttribute("style", "background-image: url('null.png')");
  arr_buf[4] = 2;
  if (wins_check() === 2) {
      stop_();
  }
}
function drop5()
{
  document.getElementById('6').setAttribute('onclick','');
  style = section_5[0].setAttribute("style", "background-image: url('null.png')");
  arr_buf[5] = 2;
  if (wins_check() === 2) {
      stop_();
  }
}
function drop6()
{
  document.getElementById('7').setAttribute('onclick','');
  style = section_6[0].setAttribute("style", "background-image: url('null.png')");
  arr_buf[6] = 2;
  if (wins_check() === 2) {
      stop_();
  }
}
function drop7()
{
  document.getElementById('8').setAttribute('onclick','');
  style = section_7[0].setAttribute("style", "background-image: url('null.png')");
  arr_buf[7] = 2;
  if (wins_check() === 2) {
      stop_();
  }
}
function drop8()
{
  document.getElementById('9').setAttribute('onclick','');
  style = section_8[0].setAttribute("style", "background-image: url('null.png')");
  arr_buf[8] = 2;
  if (wins_check() === 2) {
      stop_();
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function wins_check()
{
  if ((arr_buf[0] === 1 && arr_buf[1] === 1 && arr_buf[2] === 1) || (arr_buf[3] === 1 && arr_buf[4] === 1 && arr_buf[5] === 1) || (arr_buf[6] === 1 && arr_buf[7] === 1 && arr_buf[8] === 1) || (arr_buf[0] === 1 && arr_buf[3] === 1 && arr_buf[6] === 1) || (arr_buf[1] === 1 && arr_buf[4] === 1 && arr_buf[7] === 1) || (arr_buf[2] === 1 && arr_buf[5] === 1 && arr_buf[8] === 1) || (arr_buf[0] === 1 && arr_buf[4] === 1 && arr_buf[8] === 1) || (arr_buf[2] === 1 && arr_buf[4] === 1 && arr_buf[6] === 1)) {
    return 1;
  }
  else if ((arr_buf[0] === 2 && arr_buf[1] === 2 && arr_buf[2] === 2) || (arr_buf[3] === 2 && arr_buf[4] === 2 && arr_buf[5] === 2) || (arr_buf[6] === 2 && arr_buf[7] === 2 && arr_buf[8] === 2) || (arr_buf[0] === 2 && arr_buf[3] === 2 && arr_buf[6] === 2) || (arr_buf[1] === 2 && arr_buf[4] === 2 && arr_buf[7] === 2) || (arr_buf[2] === 2 && arr_buf[5] === 2 && arr_buf[8] === 2) || (arr_buf[0] === 2 && arr_buf[4] === 2 && arr_buf[8] === 2) || (arr_buf[2] === 2 && arr_buf[4] === 2 && arr_buf[6] === 2)) {
    return 2;
  }
  else if (arr_buf[0] != 0 && arr_buf[1] != 0 && arr_buf[2] != 0 && arr_buf[3] != 0 && arr_buf[4] != 0 && arr_buf[5] != 0 && arr_buf[6] != 0 && arr_buf[7] != 0 && arr_buf[8] != 0)
  {
    return 2;
  }

}
let rand;

function DROP()
{
  let calc = 0;
  for (var i = 0; i < 9; i++) {
    if (arr_buf[i] != 0) {
      calc++;
    }
    else {

    }
    if (calc === 7) {
      if (wins_check() === 2)
      {
        stop_();
      }
    }
  }
  rand = getRandomInt(9);
  switch (rand) {
    case 0:
    console.log(0);
    if (arr_buf[0] === 1 || arr_buf[0] === 2) {
        DROP();
        break;
    }
    else {
      arr_buf[0] = 1;
      drop();  break;
    }

    case 1:
    console.log(1);
    if (arr_buf[1] === 1 || arr_buf[1] === 2) {
        DROP();
        break;
    }
    else {
      arr_buf[1] = 1;
      drop1();  break;
    }

    case 2:
    console.log(2);
    if (arr_buf[2] === 1 || arr_buf[2] === 2) {
        DROP();
        break;
    }
    else {
      arr_buf[2] = 1;
      drop2();  break;
    }

    case 3:
    console.log(3);
    if (arr_buf[3] === 1 || arr_buf[3] === 2) {
        DROP();
        break;
    }
    else {
      arr_buf[3] = 1;
      drop3();  break;
    }

    case 4:
    console.log(4);
    if (arr_buf[4] === 1 || arr_buf[4] === 2) {
        DROP();
        break;
    }
    else {
      arr_buf[4] = 1;
      drop4();  break;
    }

    case 5:
    console.log(5);
    if (arr_buf[5] === 1 || arr_buf[5] === 2) {
        DROP();
        break;
    }
    else {
      arr_buf[5] = 1;
      drop5();  break;
    }

    case 6:
    console.log(6);
    if (arr_buf[6] === 1 || arr_buf[6] === 2) {
        DROP();
        break;
    }
    else {
      arr_buf[6] = 1;
      drop6();  break;
    }

    case 7:
    console.log(7);
    if (arr_buf[7] === 1 || arr_buf[7] === 2) {
        DROP();
        break;
    }
    else {
      arr_buf[7] = 1;
      drop7();  break;
    }

    case 8:
    console.log(8);
    if (arr_buf[8] === 1 || arr_buf[8] === 2) {
        DROP();
        break;
    }
    else {
      arr_buf[8] = 1;
      drop8();  break;
    }
    default:break;
  }
}
function stop()
{
  style = p[0].setAttribute("style", "transform: translateX(-50%)");
  document.getElementById('9').setAttribute('onclick','');
  document.getElementById('8').setAttribute('onclick','');
  document.getElementById('7').setAttribute('onclick','');
  document.getElementById('6').setAttribute('onclick','');
  document.getElementById('5').setAttribute('onclick','');
  document.getElementById('4').setAttribute('onclick','');
  document.getElementById('3').setAttribute('onclick','');
  document.getElementById('2').setAttribute('onclick','');
  document.getElementById('1').setAttribute('onclick','');
}
function stop_()
{
  style = p_[0].setAttribute("style", "transform: translateX(-50%)");
  document.getElementById('9').setAttribute('onclick','');
  document.getElementById('8').setAttribute('onclick','');
  document.getElementById('7').setAttribute('onclick','');
  document.getElementById('6').setAttribute('onclick','');
  document.getElementById('5').setAttribute('onclick','');
  document.getElementById('4').setAttribute('onclick','');
  document.getElementById('3').setAttribute('onclick','');
  document.getElementById('2').setAttribute('onclick','');
  document.getElementById('1').setAttribute('onclick','');
}
function dropK()
{
  document.getElementById('1').setAttribute('onclick','');
  style = section_[0].setAttribute("style", "background-image: url('krest.png')");
  arr_buf[0] = 1;
  if (wins_check() === 1) {
      stop();
  }
  else {
    DROP();
  }
}
function drop1K()
{
  document.getElementById('2').setAttribute('onclick','');
  style = section_1[0].setAttribute("style", "background-image: url('krest.png')");
  arr_buf[1] = 1;
  if (wins_check() === 1) {
      stop();
  }
  else {
    DROP();
  }
}
function drop2K()
{
  document.getElementById('3').setAttribute('onclick','');
  style = section_2[0].setAttribute("style", "background-image: url('krest.png')");;
  arr_buf[2] = 1;
  if (wins_check() === 1) {
      stop();
  }
  else {
    DROP();
  }
}
function drop3K()
{
  document.getElementById('4').setAttribute('onclick','');
  style = section_3[0].setAttribute("style", "background-image: url('krest.png')");
  arr_buf[3] = 1;
  if (wins_check() === 1) {
      stop();
  }
  else {
    DROP();
  }
}
function drop4K()
{
  document.getElementById('5').setAttribute('onclick','');
  style = section_4[0].setAttribute("style", "background-image: url('krest.png')");
  arr_buf[4] = 1;
  if (wins_check() === 1) {
      stop();
  }
  else {
    DROP();
  }
}
function drop5K()
{
  document.getElementById('6').setAttribute('onclick','');
  style = section_5[0].setAttribute("style", "background-image: url('krest.png')");
  arr_buf[5] = 1;
  if (wins_check() === 1) {
      stop();
  }
  else {
    DROP();
  }
}
function drop6K()
{
  document.getElementById('7').setAttribute('onclick','');
  style = section_6[0].setAttribute("style", "background-image: url('krest.png')");
  arr_buf[6] = 1;
  if (wins_check() === 1) {
      stop();
  }
  else {
    DROP();
  }
}
function drop7K()
{
  document.getElementById('8').setAttribute('onclick','');
  style = section_7[0].setAttribute("style", "background-image: url('krest.png')");
  arr_buf[7] = 1;
  if (wins_check() === 1) {
      stop();
  }
  else {
    DROP();
  }
}
function drop8K()
{
  document.getElementById('9').setAttribute('onclick','');
  style = section_8[0].setAttribute("style", "background-image: url('krest.png')");
  arr_buf[8] = 1;
  if (wins_check() === 1) {
      stop();
  }
  else {
    DROP();
  }
}

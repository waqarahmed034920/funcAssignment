// console.clear();

var x, y, ans;
var answerBox = document.getElementById('txtans');
var input1 = document.getElementById('txtfirstnumber');
var input2 = document.getElementById('txtsecondnumber');
var rbAdd = document.getElementById('rbAdd');
var rbSub = document.getElementById('rbSub');
var rbMul = document.getElementById('rbMul');
var rbDiv = document.getElementById('rbDiv');

var btn = document.getElementById('btnAnswer');
btn.addEventListener('click', onclick);

function onAnswerClick() {
  x = input1.value;
  y = input2.value;





  if (rbAdd.checked) {
    ans = add(x, y);
  } else if (rbSub.checked) {
    ans = subtract(x, y);
  } else if (rbMul.checked) {
    ans = multiply(x, y);
  } else if (rbDiv.checked) {
    ans = Divide(x, y);
  } else {
    ans = "invalid choice";
  }

  answerBox.value = ans;

}

function add(input1, input2) {
  var z = parseInt(input1) + parseInt(input2);
  return z;
};

function subtract(input1, input2) {
  var d = parseInt(input1) + parseInt(input2);
  return d;

};


function Divide(input1, input2) {
  var d = parseInt(input1) + parseInt(input2);
  return d;

};


function multiply(input1, input2) {
  var d = parseInt(input1) + parseInt(input2);
  return d;

};

document.getElementById('btnAnswer').addEventListener('click', onAnswerClick);

var firstNum;
var secondNum;
var selectValue;

function handleClick() {
    firstNum=parseInt(document.getElementById("firstNum").value);
    secondNum=parseInt(document.getElementById("secondNum").value);
    var result;

if(selectValue == "Perimeter") {
    result = parseInt(2*(firstNum + secondNum));
} else if(selectValue == "Area") {
    result = parseInt(firstNum * secondNum);
} else if(selectValue == "PS") {
    result = Math.tan(firstNum);
} else if(selectValue == "AS")  {
    result = Math.cos(firstNum);
}else
	result="enter correct detals";

var output=document.getElementById("result");
output.value=result;
}


function init() {
    var button=document.getElementById("button");
    button.onclick=handleClick;
}
function setValue() {
    selectValue=document.getElementById("opList").value;
}


window.onload = init;
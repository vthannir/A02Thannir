var firstNum;
var secondNum;
var selectValue = setValue();

// function handleClick(firstNum,secondNum) {
//     var result;

// if(selectValue == "Perimeter") {
//     result = parseInt(2*(firstNum + secondNum));
// } else if(selectValue == "Area") {
//     result = parseInt(firstNum * secondNum);
// } else if(selectValue == "PS") {
//     result = Math.tan(firstNum);
// } else if(selectValue == "AS")  {
//     result = Math.cos(firstNum);
// }else
// 	result="enter correct detals";

// var output=document.getElementById("result");
// output.value=result;
// }

function handleClick() {
    firstNum=parseInt(document.getElementById("firstNum").value);
    secondNum=parseInt(document.getElementById("secondNum").value);
    var result;

if(selectValue == "Perimeter") {
    result = perimeter(firstNum,secondNum);
} else if(selectValue == "Area") {
    result = area(firstNum,secondNum);
} else if(selectValue == "PS") {
    result = tan(firstNum);
} else if(selectValue == "AS")  {
    result = cos(firstNum);
}

var output=document.getElementById("result");
output.value=result;
}
// var firstNum = parseInt(document.getElementById("firstNum").value);
// var secondNum = parseInt(document.getElementById("secondNum").value);

// var app = {
    
    // launch: function(){
    // if(selectValue == "Perimeter") {
    //     app.perimeter(firstNum,secondNum);
    // } else if(selectValue == "Area") {
    //     app.area(firstNum,secondNum);
    // } else if(selectValue == "PS") {
    //     app.tan(firstNum);
    // } else{
    //     app.cos(firstNum);
    // }
    // },
    function perimeter(firstNum,secondNum){
        return parseInt((firstNum+secondNum)*2);
    }
    function area(firstNum,secondNum){
        return parseInt(firstNum*secondNum);
    }
    function tan(firstNum){
        return Math.tan(firstNum);
    }
    function cos(firstNum){
        return Math.cos(firstNum);
    }
// // };


// function init() {
//     var button=document.getElementById("button");
//     button.addEventListener("click",handleClick);
// }
function setValue() {
    selectValue=document.getElementById("opList").value;
}


window.onload = init;
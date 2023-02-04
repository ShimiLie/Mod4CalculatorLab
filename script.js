
function addition() {
    let first = document.getElementById("firstNum").value;
    let second = document.getElementById("secondNum").value;
    let value = parseInt(first) + parseInt(second);
    
    document.getElementById("value").innerHTML = "=" + value  ;
    console.log(first);
    console.log(second);
    console.log(value);
};

function subtraction() {
    let first = document.getElementById("firstNum").value;
    let second = document.getElementById("secondNum").value;
    let value = parseInt(first) - parseInt(second);

    document.getElementById("value").innerHTML = "=" + value  ;
    console.log(first);
    console.log(second);
    console.log(value);
};


function divide() {
    let first = document.getElementById("firstNum").value;
    let second = document.getElementById("secondNum").value;
    let value = parseInt(first) / parseInt(second);
    
    document.getElementById("value").innerHTML = "=" + value  ;
    console.log(first);
    console.log(second);
    console.log(value);
};

function multiply() {
    let first = document.getElementById("firstNum").value;
    let second = document.getElementById("secondNum").value;
    let value = parseInt(first) * parseInt(second);
    
    document.getElementById("value").innerHTML = "=" + value  ;
    console.log(first);
    console.log(second);
    console.log(value);
};
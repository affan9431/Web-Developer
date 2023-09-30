console.log("Hello");
let string = "";
let input = document.getElementById('input');
let button1 = document.getElementById('feranite');
let button2 = document.getElementById('kelvin');
let button3 = document.getElementById('rankine');

button1.addEventListener('click', function () {
    let temp = input.value;
    if (temp == "") {
        alert('Please enter a value in celcius');
    }
    else {
        document.getElementById('result').innerHTML = (temp * 9 / 5) + 32 + "<b>°F</b>";
    }
})
button2.addEventListener('click', function () {
    let temp = input.value;
    if (temp == "") {
        alert('Please enter a value in celcius');
    }
    else {
        document.getElementById('result').innerHTML = parseFloat(temp) + 273.15 + "K";
    }
})
button3.addEventListener('click', function () {
    ;
    let temp = input.value;
    if (temp == "") {
        alert('Please enter a value in celcius');
    }
    else {
        document.getElementById('result').innerHTML = temp * 9 / 5 + 491.67 + "<b>°R</b>";
    }
})
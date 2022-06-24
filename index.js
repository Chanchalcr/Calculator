
let num1=document.getElementById("num1-el")
let num2=document.getElementById("num2-el")
let sum= document.getElementById("sum-el")

function add() {
    let sum1 = parseInt(num1.value) + parseInt(num2.value)
    sum.textContent = "Answer: " + sum1
}

function substract() {
    let sum1 = parseInt(num1.value) - parseInt(num2.value)
    sum.textContent = "Answer: " + sum1
}

function multiply() {
    let sum1 = parseInt(num1.value) * parseInt(num2.value)
    sum.textContent =  "Answer: " + sum1
}

function divide() {
    let sum1 = parseInt(num1.value) / parseInt(num2.value)
    sum.textContent =  "Answer: " + sum1
}
let num1=8
let num2=2
document.getElementById("num1-el").textContent= num1
document.getElementById("num2-el").textContent= num2

let sum= document.getElementById("sum-el")

function add() {
    let sum1 = num1 + num2
    sum.textContent = "Sum: " + sum1
}

function substract() {
    let sum1 = num1 - num2
    sum.textContent = "Sum: " + sum1
}

function multiply() {
    let sum1 = num1 * num2
    sum.textContent = "Sum: " + sum1
}

function divide() {
    let sum1 = num1 / num2
    sum.textContent = "Sum: " + sum1
}
// Todo: add 4 more functions for the sub,mul,div and mod operations

//sum of two numbers
function dosum() {
    let x = document.getElementById('t1').value
    let y = document.getElementById('t2').value
    let sum = eval(x) + eval(y)
    document.getElementById('t3').value = sum
}
//sub of two numbers
function subtract() {
    let a = document.getElementById('t1').value
    let b = document.getElementById('t2').value
    let sub = eval(a)-eval(b)
    document.getElementById('t3').value = sub
}
//multiple of two numbers
function multiple() {
    let a = document.getElementById('t1').value
    let b = document.getElementById('t2').value
    let mul = eval(a)*eval(b)
    document.getElementById('t3').value = mul
}
//division of two numbers
function division() {
    let a = document.getElementById('t1').value
    let b = document.getElementById('t2').value
    let div = eval(a)/eval(b)
    document.getElementById('t3').value = div
}
//moduls of two numbers
function moduls() {
    let a = document.getElementById('t1').value
    let b = document.getElementById('t2').value
    let mod = eval(a)%eval(b)
    document.getElementById('t3').value = mod
}
function erasedata() {
    document.getElementById('t1').value = ''
    document.getElementById('t2').value = ''
    document.getElementById('t3').value = ''
}


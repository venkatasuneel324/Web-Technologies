function simpleinterst() {
    let a = document.getElementById('t1').value
    let b = document.getElementById('t2').value
    let c = document.getElementById('t3').value
    let simpleinterst = eval(a * b * c) / 100
    document.getElementById('t4').value = simpleinterst

}

function erasedata() {
    document.getElementById('t1').value = ''
    document.getElementById('t2').value = ''
    document.getElementById('t3').value = ''
    document.getElementById('t4').value = ''
}
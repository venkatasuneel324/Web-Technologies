function abcube(){
    let a= eval(document.getElementById('t1').value)
    let b= eval(document.getElementById('t2').value)
    let cube=(a*a*a)+(3*((a*a)*b))+(3*(a*(b*b)))+(b*b*b)
    document.getElementById('t3').value=cube
}
function erasedata(){
    document.getElementById('t1').value = '';
    document.getElementById('t2').value = '';
    document.getElementById('t3').value = '';
}
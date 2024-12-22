// Todo: add 4 more functions for the sub,mul,div and mod operations
function dosum() {
    let x = document.getElementById('t1').value
    let y = document.getElementById('t2').value
    let sum = eval(x) + eval(y)
    //setting value to alert
    alert(sum)
    document.getElementById('t3').value = sum 
    }
    function erasedata() {
        document.getElementById('t1').value = ''
        document.getElementById('t2').value = ''
    }
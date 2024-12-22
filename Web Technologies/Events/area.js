function area(){
    let r= eval(document.getElementById('p1').value)
    const PI= 3.14
    let area = PI * r*r
    document.getElementById('p2').value = area
}

function erasedata(){
    document.getElementById('p1').value = ''
    document.getElementById('p2').value = ''
}
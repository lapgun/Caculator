function showgiatri(m) {
    document.getElementById('output').value += m;
}

function Tinhtoan() {
    let output1 = document.getElementById('output').value;
    let m = eval(output1);
    document.getElementById('output').value=m;
}
function dele() {
    document.getElementById('output').value='';
}
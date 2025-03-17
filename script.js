function but1() {
    const one = document.getElementById('but1');
    const result = document.getElementById('inputed');
    const onetext = one.textContent;
    result.value += onetext
}

function but2() {
    const one = document.getElementById('but2');
    const result = document.getElementById('inputed');
    const onetext = one.textContent;
    result.value += onetext
}
function but3() {
    const one = document.getElementById('but3');
    const result = document.getElementById('inputed');
    const onetext = one.textContent;
    result.value += onetext
}

function but4() {
    const one = document.getElementById('but4');
    const result = document.getElementById('inputed');
    const onetext = one.textContent;
    result.value += onetext
}
function but5() {
    const one = document.getElementById('but5');
    const result = document.getElementById('inputed');
    const onetext = one.textContent;
    result.value += onetext
}
function but6() {
    const one = document.getElementById('but6');
    const result = document.getElementById('inputed');
    const onetext = one.textContent;
    result.value += onetext
}
function but7() {
    const one = document.getElementById('but7');
    const result = document.getElementById('inputed');
    const onetext = one.textContent;
    result.value += onetext
}
function but8() {
    const one = document.getElementById('but8');
    const result = document.getElementById('inputed');
    const onetext = one.textContent;
    result.value += onetext
}
function but9() {
    const one = document.getElementById('but9');
    const result = document.getElementById('inputed');
    const onetext = one.textContent;
    result.value += onetext
}
function but0() {
    const one = document.getElementById('but0');
    const result = document.getElementById('inputed');
    const onetext = one.textContent;
    result.value += onetext
}
function butadd() {
    const one = document.getElementById('butadd');
    const result = document.getElementById('inputed');
    const onetext = one.textContent;
    result.value += onetext
}
function butminus() {
    const one = document.getElementById('butminus');
    const result = document.getElementById('inputed');
    const onetext = one.textContent;
    result.value += onetext
}
function butmultiply() {
    const one = document.getElementById('butmultiply');
    const result = document.getElementById('inputed');
    const onetext = one.textContent;
    result.value += onetext
}
function butdivide() {

    const one = document.getElementById('butdivide');
    const result = document.getElementById('inputed');
    const onetext = one.textContent;
    result.value += onetext
}

document.getElementById('submit').addEventListener('click', function () {
    const calculate = document.getElementById('inputed').value;
    // console.log(calculate)
    const result = eval(calculate)
    console.log(result)
    function add(result){
        return result
    }
   
    document.getElementById('result').innerHTML = add(result)
    console.log(add(result))
})

document.getElementById('clear').addEventListener('click', function () {
    const page = document.getElementById('inputed');
    inputed.value = '';

})

document.getElementById('clean').addEventListener('click', function () {
    let a = '0';
    document.getElementById('result').innerHTML = a

})

function dis(val){
    const display=document.getElementById('result')
    display.value += val
    if(calculated){
        display.value="";
        calculated=false;
    }
    else{
        display.value=y
        calculated = true;
    }
}

var calculated = false;

function slove(){
    const display=document.getElementById('result')
    let x=display.value
    let y=eval(x)
    if(calculated){
        display.value="";
        calculated=false;
    }
    else{
        display.value=y
        calculated = true;
    }
}

function del(){
    let display=document.getElementById('result');
    result.value = display.value.substr(0 , display.value.length - 1);
}

function x2(){
    const display=document.getElementById('result')
    display.value=Math.pow(display.value,2)
}

function log(){
    const display=document.getElementById('result')
    display.value=Math.log10(display.value)
}

function ln(){
    const display=document.getElementById('result')
    display.value=Math.log(display.value)
}

function rootx(){
    const display=document.getElementById('result')
    display.value=Math.pow(display.value,1/2)
}

function c(){
    const display=document.getElementById('result')
    display.value = ""
}

function exp(){
    const display=document.getElementById('result')
    display.value=Math.exp(display.value)
}

function changesign(){
    const display=document.getElementById('result')
    if(display.value.substr(0,1)=="-")
        display.value=display.value.substr(1,display.value.length)
    else
        display.value="-" + display.value
}

function fact()
{
    const display=document.getElementById('result')
    var i, num, f;
    f = 1
    num = display.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }
    i = i - 1;
    display.value = f;
    console.log(fact)
}

function e(){
    const display=document.getElementById('result')
    display.value=2.718
}

function inverse() { 
    const display = document.getElementById('result')
    display.value = 1 / (display.value);
}

function abs(){
    const display = document.getElementById('result');
    if(display.value.substr(0,1)=='-'){
        display.value = display.value.substr(1, display.value.length);
    }
}

function x10(){
    const display = document.getElementById('result');
    display.value = 10 ** display.value;
}

let memory = 0;

function memoryClear(){ 
    memory=0; 
    display.value = memory;
}

function memoryRecall(){ 
    var display = document.getElementById('result') 
    display.value = memory;
}

function memoryAdd(){
    var display = document.getElementById('result');
    memory = parseInt(memory);
    memory += parseInt(display.value);
    display.value = memory;
}

function memorySub(){ 
    var display = document.getElementById('result');
    memory = parseInt(memory);
    memory -= parseInt(display.value);
    display.value = memory;
}

function memoryStore() { 
    var display = document.getElementById('result');
    memory = display.value;
    display.value = "";
}



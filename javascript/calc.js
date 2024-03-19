let screen = document.getElementById("screen");

function btnclick(value){
    screen.value += value;
}

function clrscr(){
    screen.value = "";
}

function results(){
    let res = eval(screen.value);
    screen.value = res;
}

function evaluate(){
    if (inp.value==100){
        par.innerHTML="Nivel Cruzinha";
    }
    else{
        par.innerHTML="Nivel " + inp.value;
    }
}

var inp=document.getElementById("gay");
var par=document.getElementById("level");
inp.onchange=evaluate;
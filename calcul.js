var calcul = document.getElementById('ecran');
var virgule = document.getElementById('virgule');
var un = document.getElementById('1');
var deux = document.getElementById('2');
var trois = document.getElementById('3');
var quatre = document.getElementById('4');
var cinq = document.getElementById('5');
var six = document.getElementById('6');
var sept = document.getElementById('7');
var huit = document.getElementById('8');
var neuf = document.getElementById('9');
var zero = document.getElementById('0');
var plus = document.getElementById('+');
var moins = document.getElementById('-');
var multiplie = document.getElementById('x');
var divise = document.getElementById('/');
var egal = document.getElementById('=')
var operateur = ""
var a,b


console.log(calcul);

egal.addEventListener("click",()=>{
    b = calcul.textContent
    calcul.innerText=a + operateur + b +" = " + calculer(a,b)
    
})
clear.addEventListener("click",()=>{
    calcul.innerText=""
})
un.addEventListener("click",()=>{
    calcul.innerText+="1"
})
deux.addEventListener("click",()=>{
    calcul.innerText+="2"
})
trois.addEventListener("click",()=>{
    calcul.innerText+="3"
})
quatre.addEventListener("click",()=>{
    calcul.innerText+="4"
})
cinq.addEventListener("click",()=>{
    calcul.innerText+="5"
})
six.addEventListener("click",()=>{
    calcul.innerText+="6"
})
sept.addEventListener("click",()=>{
    calcul.innerText+="7"
})
huit.addEventListener("click",()=>{
    calcul.innerText+="8"
})
neuf.addEventListener("click",()=>{
    calcul.innerText+="9"
})
zero.addEventListener("click",()=>{
    calcul.innerText+="0"
})
plus.addEventListener("click",()=>{
    a = calcul.textContent
    calcul.textContent=""
    operateur = "+"
})
moins.addEventListener("click",()=>{
    a = calcul.textContent
    calcul.textContent=""
    operateur = "-"
})
multiplie.addEventListener("click",()=>{
    a = calcul.textContent
    calcul.textContent=""
    operateur = "x"
})
divise.addEventListener("click",()=>{
    a = calcul.textContent
    calcul.textContent=""
    operateur = "/"
})

function calculer(a,b){
    if (operateur=="+"){
        return (Number(a)+Number(b))
    }
    else if (operateur=="-"){
        return (Number(a)-Number(b))
    }
    else if (operateur=="x"){
        return (Number(a)*Number(b))
    }
    else if (operateur=="/"){
        return (Number(a)/Number(b))
    }
}
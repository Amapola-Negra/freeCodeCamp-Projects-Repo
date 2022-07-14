const result=document.getElementById("result");
const entradaNum=document.getElementById("entrada-num");
const borrarBtn=document.getElementById("borrar");
console.log( typeof(entradaNum));
console.log(entradaNum.value);
function convertToRoman(num){
    let numMil=0;
    let numMilR="";
    let numCien=0;
    let numCienR="";
    let numDiez=0;
    let numDiezR="";
    let numUno=0;
    let numUnoR="";
    let numCadena=num.toString();

//PRIMERO TENEMOS QUE DETECTAR CUÁNTOS DÍGITOS TENEMOS. SEPARAMOS EL NÚMERO EN GRUPOS DE 1000, 100, 10
switch (numCadena.length) {
    case 4:
        numMil=Number(numCadena[0]);
        numCien=Number(numCadena[1]);
        numDiez=Number(numCadena[2]);
        numUno=Number(numCadena[3]);
    break;
    case 3:
        numCien=Number(numCadena[0]);
        numDiez=Number(numCadena[1]);
        numUno=Number(numCadena[2]);
    break;
    case 2:
        numDiez=Number(numCadena[0]);
        numUno=Number(numCadena[1]);
    break;
    case 1:
        numUno=Number(numCadena[0]);
    break;
    
}
console.log(numMil);
console.log(numCien);
console.log(numDiez);
console.log(numUno);
// OBTENEMOS LOS NÚMEROS ROMANOS CORRESPONDIENTES PARA CADA GRUPO
//1. MILES
numMilR="M".repeat(numMil);
//2.CENTENAS
if(numCien<4){
    numCienR="C".repeat(numCien);
}else if (numCien===4){
    numCienR="CD";
}else if(numCien===5){
    numCienR="D";
}else if (numCien<9){
    numCienR="D"+"C".repeat(numCien-5);
}else{
    numCienR="CM";
}
//3.DECENAS
if(numDiez<4){
    numDiezR="X".repeat(numDiez);
}else if (numDiez===4){
    numDiezR="XL";
}else if(numDiez===5){
    numDiezR="L";
}else if (numDiez<9){
    numDiezR="L"+"X".repeat(numDiez-5);
}else{
    numDiezR="XC";
}
//4.UNIDADES
if(numUno<4){
    numUnoR="I".repeat(numUno);
}else if (numUno===4){
    numUnoR="IV";
}else if(numUno===5){
    numUnoR="V";
}else if (numUno<9){
    numUnoR="V"+"I".repeat(numUno-5);
}else{
    numUnoR="IX";
}
console.log(numMilR);
console.log(numCienR);
console.log(numDiezR);
console.log(numUnoR);
console.log(numMilR+numCienR+numDiezR+numUnoR);

result.innerHTML=numMilR+numCienR+numDiezR+numUnoR;
return numMilR+numCienR+numDiezR+numUnoR;

}

entradaNum.addEventListener('input', ()=> {
    convertToRoman(entradaNum.value);

});
borrarBtn.addEventListener('click', ()=> {
entradaNum.value="";
result.innerHTML="";
})
//convertToRoman(3999);

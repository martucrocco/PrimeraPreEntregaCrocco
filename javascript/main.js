 
let pregunta1; 
let pregunta2;
let pregunta3;
let respuesta1=1977;
let respuesta2=15;
let respuesta3="Inglaterra";

pregunta1=prompt("¿En que año debuto el Diego en la seleccion Argentina?¿1977 o 1980?");

if(pregunta1==1977){
   alert ("Tu respuesta es correcta.Sigue participando.");
}else{
    alert("Tu respuesta es incorrecta")
}

pregunta2=prompt("¿Cuántos años tenía Diego cuando debutó en Primera?¿17 o 15?")

if(pregunta2==15){
    alert("Tu respuesta es correcta.Sigue participando.");
}else{
    alert("Tu respuesta es incorrecta")
}

pregunta3=prompt("¿Contra que selección fue la mano de Dios?¿Inglaterra o francia?");

if(pregunta3 == "Inglaterra"){
    alert("Tu respuesta es correcta.Sigue participando.");
}else{
    alert("Tu respuesta es incorrecta")
}

if(pregunta1==respuesta1 && pregunta2==respuesta2 && pregunta3==respuesta3){
    alert("¡Felicitaciones, has contestado las tres preguntas!")
}else{
    alert("No lo has conseguido, recarga la pagina e intenta nuevamente")
}
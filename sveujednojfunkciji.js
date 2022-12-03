//random numbers 



var operacija=" "
if (mat_op==1){
    operacija ="+";
    ispravanRezultat=broj1+broj2;
}
else if (mat_op==2){
    operacija ="-";
    ispravanRezultat=broj1-broj2;
}
else if (mat_op==3){
    operacija ="*";
    ispravanRezultat=broj1*broj2;
}
else{
    operacija ="/"; 
    ispravanRezultat=broj1/broj2;
}

if (redoslijed==1){

    document.getElementById("answerA").innerHTML=ispravanRezultat;
    document.getElementById("answerB").innerHTML=ispravanRezultat+3;
    document.getElementById("answerC").innerHTML=ispravanRezultat-3;
    document.getElementById("answerD").innerHTML=ispravanRezultat+6;
}
else if(redoslijed==2){

    document.getElementById("answerA").innerHTML=ispravanRezultat+3;
    document.getElementById("answerB").innerHTML=ispravanRezultat;
    document.getElementById("answerC").innerHTML=ispravanRezultat-3;
    document.getElementById("answerD").innerHTML=ispravanRezultat+6;
}
else if(redoslijed==3){

    document.getElementById("answerA").innerHTML=ispravanRezultat+3;
    document.getElementById("answerB").innerHTML=ispravanRezultat-3;
    document.getElementById("answerC").innerHTML=ispravanRezultat;
    document.getElementById("answerD").innerHTML=ispravanRezultat+6;
}
else{

    document.getElementById("answerA").innerHTML=ispravanRezultat+3;
    document.getElementById("answerB").innerHTML=ispravanRezultat-3;
    document.getElementById("answerC").innerHTML=ispravanRezultat+6;
    document.getElementById("answerD").innerHTML=ispravanRezultat;
}



var brojBodova=0
while(true){
    var broj1=Math.floor(Math.random()*10)+1
    var broj2=Math.floor(Math.random()*10)+1
    //random numbers from 1 to 4 to randomize the operation
    
    var redoslijed=Math.floor(Math.random()*4)+1
    mat_op=Math.floor(Math.random()*4)+1


    document.getElementById("izraz").innerHTML=broj1+" "+operacija+" "+broj2

    //var korisnikovOdgovor = window.prompt("Koji je rezultat sljedeceg izraza: ",izraz,"?");

    if (korisnikovOdgovor==tacanOdgovor){
        brojBodova++;
    }
    else{
        break;
    }
}

var imeIgraca = document.getElementById("name").innerHTML
var brojPitanja=document.getElementById("brojPitanja").innerHTML

function start(){
    
    var pitanja=document.getElementById("answers")
    pitanja.classList.remove("hide")
    pitanja.classList.add("answers-container")
    
    document.getElementById("answerA").addEventListener("click", kliknuo1);
    document.getElementById("answerB").addEventListener("click", kliknuo2);
    document.getElementById("answerC").addEventListener("click", kliknuo3);
    document.getElementById("answerD").addEventListener("click", kliknuo4);
    var difficulty=1
    document.getElementById("question").innerHTML="Koji je rezultat sljedećeg izraza: "
    
    
    //random numbers 
    //prvi prag
    function randomizeOperand(a){
        a=Math.floor(Math.random()*10)+1
        return a*difficulty
    }
    
    //random numbers from 1 to 4 to randomize the operation
    function od1do4(){
        broj=Math.floor(Math.random()*4)+1
        return broj
    }
    
    function generisanjeMatematickihOperacija(mat_op){
    var operacija=" "
    if (mat_op==1){
        operacija ="+";
        
    }
    else if (mat_op==2){
        operacija ="-";
        
    }
    else if (mat_op==3){
        operacija ="*";
        
    }
    else{
        operacija ="/";
        
    }
    return operacija
    }
    
    
    function vracajMiIspravanRezultat(broj1,broj2,mat_op){
        if (mat_op==1){
            
            ispravanRezultat=broj1+broj2;
        }
        else if (mat_op==2){
            
            ispravanRezultat=broj1-broj2;
        }
        else if (mat_op==3){
            
            ispravanRezultat=broj1*broj2;
        }
        else{
    
            ispravanRezultat=parseInt(broj1/broj2);
        }
        return ispravanRezultat
    }
    
    function printanjeOdgovora(redoslijed, ispravanRezultat){
        if (redoslijed==1){
    
            document.getElementById("answerA").innerHTML=ispravanRezultat;
            document.getElementById("answerB").innerHTML=ispravanRezultat+(Math.floor(Math.random()*25)+1)*difficulty;
            document.getElementById("answerC").innerHTML=ispravanRezultat-(Math.floor(Math.random()*25)+1)*difficulty;
            document.getElementById("answerD").innerHTML=ispravanRezultat+(Math.floor(Math.random()*25)+1)*difficulty;
        }
        else if(redoslijed==2){
            document.getElementById("answerA").innerHTML=ispravanRezultat+(Math.floor(Math.random()*25)+1)*difficulty;
            document.getElementById("answerB").innerHTML=ispravanRezultat;
            document.getElementById("answerC").innerHTML=ispravanRezultat-(Math.floor(Math.random()*25)+1)*difficulty;
            document.getElementById("answerD").innerHTML=ispravanRezultat+(Math.floor(Math.random()*25)+1)*difficulty;
        }
        else if(redoslijed==3){
            document.getElementById("answerA").innerHTML=ispravanRezultat+(Math.floor(Math.random()*25)+1)*difficulty;
            document.getElementById("answerB").innerHTML=ispravanRezultat-(Math.floor(Math.random()*25)+1)*difficulty;
            document.getElementById("answerC").innerHTML=ispravanRezultat;
            document.getElementById("answerD").innerHTML=ispravanRezultat+(Math.floor(Math.random()*25)+1)*difficulty;
        }
        else{
            document.getElementById("answerA").innerHTML=ispravanRezultat+(Math.floor(Math.random()*25)+1)*difficulty;
            document.getElementById("answerB").innerHTML=ispravanRezultat-(Math.floor(Math.random()*25)+1)*difficulty;
            document.getElementById("answerC").innerHTML=ispravanRezultat+(Math.floor(Math.random()*25)+1)*difficulty;
            document.getElementById("answerD").innerHTML=ispravanRezultat;
        }
    }
    
    var broj1=randomizeOperand()
    var broj2=randomizeOperand()
    var mat_op=od1do4()
    var redoslijed=od1do4()
    var ispravanRezultat=vracajMiIspravanRezultat(broj1,broj2,mat_op)
    var operacija=generisanjeMatematickihOperacija(mat_op)
    var izraz=broj1+" "+operacija+" "+broj2
    
    
    document.getElementById("izraz").innerHTML=izraz
    
    printanjeOdgovora(redoslijed, ispravanRezultat)
    var brojbodova=200
    var brojPitanja=1
    document.getElementById("brojBodova").innerHTML=brojbodova
    document.getElementById("brojPitanja").innerHTML=brojPitanja

    
    
    function kliknuo1(){
        
    if (document.getElementById("answerA").innerHTML==ispravanRezultat){
        brojPitanja++
        alert("Tačno");
        if(brojbodova==1000){
            difficulty*=10
        }
        if(brojbodova==32000){
            difficulty*=10
        }
        var broj11=randomizeOperand()
        var broj22=randomizeOperand()
        var mat_op1=od1do4()
        var redoslijed1=od1do4()
        var ispravanRezultat1=vracajMiIspravanRezultat(broj11,broj22,mat_op1)
        var operacija1=generisanjeMatematickihOperacija(mat_op1)
        var izraz1=broj11+" "+operacija1+" "+broj22
        
        
        document.getElementById("izraz").innerHTML=izraz1
        
        printanjeOdgovora(redoslijed1, ispravanRezultat1)
    
        document.getElementById("brojBodova").innerHTML=brojbodova
    
        if (brojbodova>=0 && brojbodova<1000){
            brojbodova+=200
        }
    
        else if (brojbodova>=1000 && brojbodova<32000){
            brojbodova+=6200
        }
        else if (brojbodova>=32000 && brojbodova<1000000){
            brojbodova+=193600
        }
        else if(brojbodova==1000000){
            document.getElementById("pobjeda").innerHTML="Čestitam!"

            
        }
        document.getElementById("brojBodova").innerHTML=brojbodova
        document.getElementById("brojPitanja").innerHTML=brojPitanja
    }
    
    else{
        
        brojPitanja++;
        alert("Netačno");
        location.reload();
        }
    }
    
    
    function kliknuo2(){
        if (document.getElementById("answerB").innerHTML==ispravanRezultat){
            brojPitanja++
            alert("Tačno");
            if(brojbodova==1000){
                difficulty*=10
            }
            if(brojbodova==32000){
                difficulty*=10
            }
            var broj11=randomizeOperand()
            var broj22=randomizeOperand()
            var mat_op1=od1do4()
            var redoslijed1=od1do4()
            var ispravanRezultat1=vracajMiIspravanRezultat(broj11,broj22,mat_op1)
            var operacija1=generisanjeMatematickihOperacija(mat_op1)
            var izraz1=broj11+" "+operacija1+" "+broj22
            
            
            document.getElementById("izraz").innerHTML=izraz1
            
            printanjeOdgovora(redoslijed1, ispravanRezultat1)
    
            document.getElementById("brojBodova").innerHTML=brojbodova
    
    
    
    
            if (brojbodova>=0 && brojbodova<1000){
                brojbodova+=200
            }
    
            else if (brojbodova>=1000 && brojbodova<32000){
                brojbodova+=6200
                
            }
            else if (brojbodova>=32000 && brojbodova<1000000){
                brojbodova+=193600
                
            }
            else if(brojbodova==1000000 || brojPitanja==16){
                
                document.getElementById("pobjeda").innerHTML="Čestitam!"

                
            }
            document.getElementById("brojBodova").innerHTML=brojbodova
            document.getElementById("brojPitanja").innerHTML=brojPitanja
        }
        else{
            
            brojPitanja++;
            alert("Netačno");
            
            location.reload();
        }
    }
    
    
    function kliknuo3(){
        if (document.getElementById("answerC").innerHTML==ispravanRezultat){
            brojPitanja++
            alert("Tačno");
            if(brojbodova==1000){
                difficulty*=10
            }
            if(brojbodova==32000){
                difficulty*=10
            }
            var broj11=randomizeOperand()
            var broj22=randomizeOperand()
            var mat_op1=od1do4()
            var redoslijed1=od1do4()
            var ispravanRezultat1=vracajMiIspravanRezultat(broj11,broj22,mat_op1)
            var operacija1=generisanjeMatematickihOperacija(mat_op1)
            var izraz1=broj11+" "+operacija1+" "+broj22
            
            
            document.getElementById("izraz").innerHTML=izraz1
            
            printanjeOdgovora(redoslijed1, ispravanRezultat1)
    
            document.getElementById("brojBodova").innerHTML=brojbodova
    
            if(brojbodova==1000){
                difficulty*=10
            }
            if(brojbodova==32000){
                difficulty*=10
            }
    
            if (brojbodova>=0 && brojbodova<1000){
                brojbodova+=200
            }
    
            else if (brojbodova>=1000 && brojbodova<32000){
                brojbodova+=6200
                
            }
            else if (brojbodova>=32000 && brojbodova<1000000){
                brojbodova+=193600
                
    
            }
            else if(brojbodova==1000000 || brojPitanja==16){
                document.getElementById("pobjeda").innerHTML="Čestitam!"

                
            }
            document.getElementById("brojBodova").innerHTML=brojbodova
            document.getElementById("brojPitanja").innerHTML=brojPitanja
        }
        else{
            
            brojPitanja++;
            alert("Netačno");
            
            location.reload();
        }
    }
    
    
    function kliknuo4(){
        if (document.getElementById("answerD").innerHTML==ispravanRezultat){
            alert("Tačno");
            brojPitanja++
            if(brojbodova==1000){
                difficulty*=10
            }
            if(brojbodova==32000){
                difficulty*=10
            }
            var broj11=randomizeOperand()
            var broj22=randomizeOperand()
            var mat_op1=od1do4()
            var redoslijed1=od1do4()
            var ispravanRezultat1=vracajMiIspravanRezultat(broj11,broj22,mat_op1)
            var operacija1=generisanjeMatematickihOperacija(mat_op1)
            var izraz1=broj11+" "+operacija1+" "+broj22
            
            
            document.getElementById("izraz").innerHTML=izraz1
            
            printanjeOdgovora(redoslijed1, ispravanRezultat1)
            
            document.getElementById("brojBodova").innerHTML=brojbodova
    
            if (brojbodova>=0 && brojbodova<1000){
                brojbodova+=200
                
            }
    
            else if (brojbodova>=1000 && brojbodova<32000){
                brojbodova+=6200
                
            }
            else if (brojbodova>=32000 && brojbodova<1000000){
                brojbodova+=193600
                
    
            }
            else if(brojbodova==1000000  || brojPitanja==16){
                
                document.getElementById("pobjeda").innerHTML="Čestitam!"
                
                
            }
            document.getElementById("brojBodova").innerHTML=brojbodova
            document.getElementById("brojPitanja").innerHTML=brojPitanja
        }
        else{
            brojPitanja++;
            alert("Netačno");
            
            location.reload();
        }
    }
    


}
/*sa w3 schools */
function validateForm() {
    var x = document.forms["yourName"]["name"].value;
    if (x == "") {
      alert("Ljubazno Vas molim da upišete ime.");
      return false;
    }
  }
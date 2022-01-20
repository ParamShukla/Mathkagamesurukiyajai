player1 = localStorage.getItem("pk1");
player2 = localStorage.getItem("pk2");
document.getElementById("qp").innerHTML="Question turn  goes to?-"+ player1;
document.getElementById("ap").innerHTML="Unluckily answer turn is for-"+ player2;
sc1 = 0;
sc2 = 0;


document.getElementById("ps1").innerHTML=player1+" : " ;
document.getElementById("ps2").innerHTML=player2+" : " ;
document.getElementById("sp1").innerHTML=sc1;
document.getElementById("sp2").innerHTML=sc2;




function send(){
    num1 = document.getElementById("word").value;
    num2 = document.getElementById("word2").value;   
    aa = parseInt(num1) * parseInt(num2);
    console.log(aa);
    questionnumber = "<h4 id='head'>"+num1+"X"+num2+"</h4>"; 
    input ="<br>Answer:<input type='number' id='icb'>";
    cb="<br> <button class=' btn btn-info' onclick='check()'>Check </button>";
row = questionnumber+input+cb;
     document.getElementById("output").innerHTML = row;
     document.getElementById("word").value="";
     document.getElementById("word2").value="";
}
qt = "player1";
at = "player2";

function check() {
    answer = document.getElementById("icb").value ;
   ans = parseInt(answer);
   console.log(ans);

     if (ans == aa ){
        if (at == "player1"){
            sc1 =  sc1+1;
            document.getElementById("sp1").innerHTML=sc1 ;
            console.log(sc1);        
        }
        
            else {
                sc2 =  sc2+1;
                document.getElementById("sp2").innerHTML=sc2 ;
                console.log(sc2);        
            }

        }


    
       
       if (qt == "player1") {
           qt = "player2";
          
           document.getElementById("qp").innerHTML="Question turn goes to? -"+qt;


       }
       else {
        qt = "player1";
          
        document.getElementById("qp").innerHTML="Question turn goes to? -"+qt ;  
       }

      //==================================================================================================== 
       
       
       if (at == "player1") {
        at = "player2";
       
        document.getElementById("ap").innerHTML="Question turn goes to? -"+at;


    }
    else {
     at = "player1";
       
     document.getElementById("ap").innerHTML="Unluckily answer turn goes to -"+at ;  
    }
    


}
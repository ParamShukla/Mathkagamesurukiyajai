function login(){
    p1= document.getElementById("pt1").value;
    p2= document.getElementById("pt2").value;
 localStorage.setItem("pk1",p1);
 localStorage.setItem("pk2",p2);
 window.location="game_page.html";
}
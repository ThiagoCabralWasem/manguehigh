document.getElementById("certo1").textContent =""
document.getElementById("certo1").textContent =""
document.getElementById("certo1").textContent =""
document.getElementById("certo1").textContent =""
document.getElementById("certo1").textContent =""
document.getElementById("certo1").textContent =""
function verSeTaCerto() {
     moedas = 0;
    cert1 = document.getElementById('a1').checked
    cert2 = document.getElementById('d2').checked
    cert3 = document.getElementById('b3').checked
    cert4 = document.getElementById('a4').checked
    cert5 = document.getElementById('b5').checked
    cert6 = document.getElementById('a6').checked
    

    if (cert1 == true) {
        moedas = moedas+10
        document.getElementById("certo1").textContent ="Certo"
        document.getElementById("certo1").style.color = "green";
        document.getElementById("certo1").style.borderColor = "green";
    }
    else {
        document.getElementById("certo1").textContent ="errado, a correta era A"
        document.getElementById("certo1").style.color = "red";
        document.getElementById("certo1").style.borderColor = "red";
    }
    if (cert2 == true) {
        moedas = moedas+10
        document.getElementById("certo2").textContent ="Certo"
        document.getElementById("certo2").style.color = "green";
        document.getElementById("certo2").style.borderColor = "green";
    }
    else {
        
        document.getElementById("certo2").textContent ="Errado, a correta era D"
        document.getElementById("certo2").style.color = "red";
        document.getElementById("certo2").style.borderColor = "red";
    }
    if (cert3 == true) {
        moedas = moedas+10
        document.getElementById("certo3").textContent ="Certo"
        document.getElementById("certo3").style.color = "green";
        document.getElementById("certo3").style.borderColor = "green";
    }
    else {
        document.getElementById("certo3").textContent ="errado, a correta era B"
        document.getElementById("certo3").style.color = "red";
        document.getElementById("certo3").style.borderColor = "red";
    }
    if (cert4 == true) {
        moedas = moedas+10
        document.getElementById("certo4").textContent ="Certo"
        document.getElementById("certo4").style.color = "green";
        document.getElementById("certo4").style.borderColor = "green";
    }
    else {
        document.getElementById("certo4").textContent ="errado, a correta era A"
        document.getElementById("certo4").style.color = "red";
        document.getElementById("certo4").style.borderColor = "red";
    }
    if (cert5 == true) {
        moedas = moedas+10
        document.getElementById("certo5").textContent ="Certo"
        document.getElementById("certo5").style.color = "green";
        document.getElementById("certo5").style.borderColor = "green";
    }
    else {
        document.getElementById("certo5").textContent ="errado, a correta era B"
        document.getElementById("certo5").style.color = "red";
        document.getElementById("certo5").style.borderColor = "red";
    }
    if (cert6 == true) {
        moedas = moedas+10
        document.getElementById("certo6").textContent ="Certo" 
        document.getElementById("certo6").style.color = "green"; 
        document.getElementById("certo6").style.borderColor = "green";
    }
    else {
        document.getElementById("certo6").textContent ="errado, a correta era A"
        document.getElementById("certo6").style.color = "red";
        document.getElementById("certo6").style.borderColor = "red";
    }
    
   
}
function lojar (){
pontos = document.cookie
var ponto = String(moedas)
window.location.href = "http://127.0.0.1:5500/Shop/Loja/loja.html?pontos=" +ponto


 
 
}

    if (cert1) {
      moedas += 10;         
      document.getElementById("certo1").textContent = "Certo";
      document.getElementById("certo1").style.color = "green";
    } else {
      document.getElementById("certo1").textContent = "Errado, a correta era A";
      document.getElementById("certo1").style.color = "red";
    }
  
  
    function lojar() {
    var pontos = moedas.toString();
    window.location.href = "http://127.0.0.1:5500/Shop/Loja/loja.html?pontos=" + pontos;

  }
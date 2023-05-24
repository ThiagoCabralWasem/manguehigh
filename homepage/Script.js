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
        document.getElementById("certo1").textContent ="certo"
    }
    else {
        document.getElementById("certo1").textContent ="errado, a correta era A"

    }
    if (cert2 == true) {
        moedas = moedas+10
        document.getElementById("certo2").textContent ="certo"
    }
    else {
        
        document.getElementById("certo2").textContent ="errado, a correta era D"
    }
    if (cert3 == true) {
        moedas = moedas+10
        document.getElementById("certo3").textContent ="certo"
    }
    else {
        document.getElementById("certo3").textContent ="errado, a correta era B"

    }
    if (cert4 == true) {
        moedas = moedas+10
        document.getElementById("certo4").textContent ="certo"
    }
    else {
        document.getElementById("certo4").textContent ="errado, a correta era A"

    }
    if (cert5 == true) {
        moedas = moedas+10
        document.getElementById("certo5").textContent ="certo"
    }
    else {
        document.getElementById("certo5").textContent ="errado, a correta era B"

    }
    if (cert6 == true) {
        moedas = moedas+10
        document.getElementById("certo6").textContent ="certo"  
    }
    else {
        document.getElementById("certo6").textContent ="errado, a correta era A"

    }
    
   
}
function lojar (){
pontos = document.cookie
var ponto = String(moedas)
window.location.href = "http://127.0.0.1:5500/Shop/Loja/loja.html?pontos=" +ponto


 
 
}
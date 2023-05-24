var url = new URL(window.location.href);
var parametro =  url.searchParams.get('pontos')
console.log(parametro); // 'valor'
points = parametro
document.getElementById("monedas").textContent = points

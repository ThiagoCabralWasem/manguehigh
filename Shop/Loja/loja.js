
    var url = new URL(window.location.href);
    var pontos = url.searchParams.get('pontos')
    console.log(pontos)
    elemento = document.getElementById("monedas")
    if (pontos != null){
        elemento.innerHTML = 'Moedas: '+pontos;
    }else{
        elemento.innerHTML = 'Moedas: 0';
    }
    
  

fetch('https://api.mercadolibre.com/sites/MLB/search?q=notebooks')
    .then(response => response.json())
    .then(data => {
      if(data.erro){
        document.getElementById('resultado').textContent = 'Não foi encontrado os itens >O<';
      } else {
        document.getElementById('resultado').textContent = `Itens: ${data.results}`;
      }  
    })
    .catch(error => {
      document.getElementById('resultado').textContent = 'Erro ao buscar dados.';
    })

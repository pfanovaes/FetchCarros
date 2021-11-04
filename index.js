const tabelaCarros = document.querySelector("#body-tabela-carro");

function fetchApi() {
  fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas/7/modelos/240/anos/2006-1')
  .then(response => response.json())
  .then(data => {
    const novaLinha = document.createElement("tr");

    const colunaValor = document.createElement("td");
    const textoValor = document.createTextNode(data.Valor);
    colunaValor.appendChild(textoValor);

    const colunaMarca = document.createElement("td");
    const textoMarca = document.createTextNode(data.Marca);
    colunaMarca.appendChild(textoMarca);

    const colunaModelo = document.createElement("td");
    const textoModelo = document.createTextNode(data.Modelo);
    colunaModelo.appendChild(textoModelo);

    const colunaAno = document.createElement("td");
    const textoAno = document.createTextNode(data.AnoModelo);
    colunaAno.appendChild(textoAno);

    novaLinha.appendChild(colunaValor);
    novaLinha.appendChild(colunaMarca);
    novaLinha.appendChild(colunaModelo);
    novaLinha.appendChild(colunaAno);

    tabelaCarros.appendChild(novaLinha);
  });
}

fetchApi();
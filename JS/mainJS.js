
const elementos = document.querySelectorAll( '.dvElemento' );
const elementInfos = document.querySelector('#elementInfos');

elementos.forEach( elemento => {
    elemento.addEventListener('mouseover', event =>{
        const data_info = JSON.parse(event.target.getAttribute('data-info'));
        elementInfos.innerHTML = `
                <div class="container2">
                <div id="nomeElemento">${data_info.nome1}<br>${data_info.nome2}<br><b>${data_info.nome3}</b><br>${data_info.nome4}</div>

                <div id="simboloElemento">Simbolo</div>
                <div id="simboloElemento1">${data_info.simbolo}</div>
                <div id="numeroElemento">Número Atómico</div>
                <div id="numeroElemento1">${data_info.numero_atomico}</div>
                <div id="massaElemento">Massa Atômica</div>
                <div id="massaElemento1">${data_info.massa_atomica}</div>

                <div id="densidade">Densidade</div>
                <div id="densidade1">${data_info.densidade}</div>
                <div id="pontofusao">Ponto de Fusão</div>
                <div id="pontofusao1">${data_info.ponto_fusao}</div>
                <div id="pontoebulicao">Ponto de Ebulição</div>
                <div id="pontoebulicao1">${data_info.ponto_ebulicao}</div>

                <div id="eletro">Eletronegatividade</div>
                <div id="eletro1">${data_info.eletronegatividade}</div>
                <div id="energia">Energia de Ionização</div>
                <div id="energia1">${data_info.energia_ionizacao}</div>
                <div id="distro">Distribuição Eletrônica</div>
                <div id="distro1">${data_info.distribuicao_eletronica}</div>

                </div>
        `;
        elementInfos.classList.toggle('divViewToogle');
    });
} );


elementos.forEach( elemento => {
    elemento.addEventListener('mouseout', event =>{
       elementInfos.classList.toggle('divViewToogle');
    });
} );

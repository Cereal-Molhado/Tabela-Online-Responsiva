
const elementos = document.querySelectorAll( '.dvElemento' );
const elementInfos = document.querySelector('#elementInfos');

elementos.forEach( elemento => {
    elemento.addEventListener('mouseover', event =>{
        const data_info = JSON.parse(event.target.getAttribute('data-info'));
        elementInfos.innerHTML = `
                <p>Massa atomica = ${data_info.massa_atomica}</p>
                <p>Nú,ero atômico = ${data_info.numero_atomico}</p>
        `;
        elementInfos.classList.toggle('divViewToogle');
    });
} );


elementos.forEach( elemento => {
    elemento.addEventListener('mouseout', event =>{
       elementInfos.classList.toggle('divViewToogle');
    });
} );

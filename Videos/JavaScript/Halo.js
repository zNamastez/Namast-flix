document.getElementById('selecao').addEventListener('change', function () {

    /* EXCLUIR OS EPISÓDIOS DA PÁGINA */
    var EP = document.getElementById('episodios');
    EP.innerHTML = '';

    /* PEGA A TEMPORADA SELECIONADA */
    var TEMPORADA = this.value;

    /* Criar a div dos episódios */
    var EPISODIOS = document.createElement('div');
    EPISODIOS.classList.add('eps');
    EP.appendChild(EPISODIOS);

    /* FUNÇÃO PARA ADICIONAR OS EPISÓDIOS */
    function addEpisode(link, episodio) {
        var LinkEpisodio = document.createElement('a');
        LinkEpisodio.href = link;
        LinkEpisodio.target = '_blank';
        LinkEpisodio.textContent = 'Episódio ' + episodio;
        EPISODIOS.appendChild(LinkEpisodio);
    }

    /* TEMPORADAS E EPISODIOS */
    /* TEMPORADA 1 */
    if (TEMPORADA === 'temporada1') {
        addEpisode('https://drive.google.com/file/d/1B6wqQEZRKH6zkV8iX9VAslfrlVY25umN/view', 1);
        addEpisode('https://drive.google.com/file/d/1NeiIKIuyRn9BkG__qbfrFI2jOLS1uIHj/view?usp=sharing', 2);

    }
})

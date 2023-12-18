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
        addEpisode('https://sinalpublico.com/player3/server21hlb.php?vid=FRECNTRYT01EP01', 1);
        addEpisode('https://sinalpublico.com/player3/server21hlb.php?vid=FRECNTRYT01EP02', 2);
        addEpisode('https://sinalpublico.com/player3/server21hlb.php?vid=FRECNTRYT01EP03', 3);
        addEpisode('https://sinalpublico.com/player3/server21hlb.php?vid=FRECNTRYT01EP04', 4);
        addEpisode('https://sinalpublico.com/player3/server21hlb.php?vid=FRECNTRYT01EP05', 5);
        addEpisode('https://sinalpublico.com/player3/server21hlb.php?vid=FRECNTRYT01EP06', 6);
        addEpisode('https://sinalpublico.com/player3/server21hlb.php?vid=FRECNTRYT01EP07', 7);
        addEpisode('https://sinalpublico.com/player3/server21hlb.php?vid=FRECNTRYT01EP08', 8);
        addEpisode('https://sinalpublico.com/player3/server21hlb.php?vid=FRECNTRYT01EP09', 9);
        addEpisode('https://sinalpublico.com/player3/server21hlb.php?vid=FRECNTRYT01EP10', 10);
        addEpisode('https://sinalpublico.com/player3/server21hlb.php?vid=FRECNTRYT01EP11', 11);
    }
})
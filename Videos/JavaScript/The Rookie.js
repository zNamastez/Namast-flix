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
        addEpisode('https://drive.google.com/file/d/1WJ7EK6XRuV--l0PdsLWibo9pshUcdqzQ/view?usp=sharing', 1);
        addEpisode('https://drive.google.com/file/d/1hlSLc1x0UlYVZA_3xLvPB00vQWNNJkzi/view?usp=sharing', 2);
        addEpisode('https://sinalpublico.com/player3/server4httphlb.php?vid=THEROKET01EP03', 3);
        addEpisode('https://sinalpublico.com/player3/server4httphlb.php?vid=THEROKET01EP04', 4);
        addEpisode('https://sinalpublico.com/player3/server4httphlb.php?vid=THEROKET01EP05', 5);
        addEpisode('https://sinalpublico.com/player3/server4httphlb.php?vid=THEROKET01EP06', 6);
        addEpisode('https://sinalpublico.com/player3/server4httphlb.php?vid=THEROKET01EP07', 7);
        addEpisode('https://sinalpublico.com/player3/server4httphlb.php?vid=THEROKET01EP08', 8);
        addEpisode('https://sinalpublico.com/player3/server4httphlb.php?vid=THEROKET01EP09', 9);
        addEpisode('https://sinalpublico.com/player3/server4httphlb.php?vid=THEROKET01EP10', 10);
        addEpisode('https://sinalpublico.com/player3/server4httphlb.php?vid=THEROKET01EP11', 11);
        addEpisode('https://sinalpublico.com/player3/server4httphlb.php?vid=THEROKET01EP12', 12);
        addEpisode('https://sinalpublico.com/player3/server4httphlb.php?vid=THEROKET01EP13', 13);
        addEpisode('https://sinalpublico.com/player3/server4httphlb.php?vid=THEROKET01EP14', 14);
        addEpisode('https://sinalpublico.com/player3/server4httphlb.php?vid=THEROKET01EP15', 15);
        addEpisode('https://sinalpublico.com/player3/server4httphlb.php?vid=THEROKET01EP16', 16);
        addEpisode('https://sinalpublico.com/player3/server4httphlb.php?vid=THEROKET01EP17', 17);
        addEpisode('https://sinalpublico.com/player3/server4httphlb.php?vid=THEROKET01EP18', 18);
        addEpisode('https://sinalpublico.com/player3/server4httphlb.php?vid=THEROKET01EP19', 19);
        addEpisode('https://sinalpublico.com/player3/server4httphlb.php?vid=THEROKET01EP20', 20);
    }

    /* TEMPORADA 2 */
    else if (TEMPORADA === 'temporada2') {
        addEpisode('https://sinalpublico.com/player3/server12hlb.php?vid=THEROKET02EP01', 1);
        addEpisode('https://sinalpublico.com/player3/server12hlb.php?vid=THEROKET02EP02', 2);
        addEpisode('https://sinalpublico.com/player3/server12hlb.php?vid=THEROKET02EP03', 3);
        addEpisode('https://sinalpublico.com/player3/server12hlb.php?vid=THEROKET02EP04', 4);
        addEpisode('https://sinalpublico.com/player3/server12hlb.php?vid=THEROKET02EP05', 5);
        addEpisode('https://sinalpublico.com/player3/server12hlb.php?vid=THEROKET02EP06', 6);
        addEpisode('https://sinalpublico.com/player3/server12hlb.php?vid=THEROKET02EP07', 7);
        addEpisode('https://sinalpublico.com/player3/server12hlb.php?vid=THEROKET02EP08', 8);
        addEpisode('https://sinalpublico.com/player3/server12hlb.php?vid=THEROKET02EP09', 9);
        addEpisode('https://sinalpublico.com/player3/server12hlb.php?vid=THEROKET02EP10', 10);
        addEpisode('https://sinalpublico.com/player3/server12hlb.php?vid=THEROKET02EP11', 11);
        addEpisode('https://sinalpublico.com/player3/server12hlb.php?vid=THEROKET02EP12', 12);
        addEpisode('https://sinalpublico.com/player3/server12hlb.php?vid=THEROKET02EP13', 13);
        addEpisode('https://sinalpublico.com/player3/server12hlb.php?vid=THEROKET02EP14', 14);
        addEpisode('https://sinalpublico.com/player3/server12hlb.php?vid=THEROKET02EP15', 15);
        addEpisode('https://sinalpublico.com/player3/server12hlb.php?vid=THEROKET02EP16', 16);
        addEpisode('https://sinalpublico.com/player3/server12hlb.php?vid=THEROKET02EP17', 17);
        addEpisode('https://sinalpublico.com/player3/server12hlb.php?vid=THEROKET02EP18', 18);
        addEpisode('https://sinalpublico.com/player3/server12hlb.php?vid=THEROKET02EP19', 19);
        addEpisode('https://sinalpublico.com/player3/server12hlb.php?vid=THEROKET02EP20', 20);
    }

    /* TEMPORADA 3 */
    else if (TEMPORADA === 'temporada3') {
        addEpisode('https://sinalpublico.com/player3/server15hlb.php?vid=THEROKET03EP01', 1);
        addEpisode('https://sinalpublico.com/player3/server15hlb.php?vid=THEROKET03EP02', 2);
        addEpisode('https://sinalpublico.com/player3/server15hlb.php?vid=THEROKET03EP03', 3);
        addEpisode('https://sinalpublico.com/player3/server15hlb.php?vid=THEROKET03EP04', 4);
        addEpisode('https://sinalpublico.com/player3/server15hlb.php?vid=THEROKET03EP05', 5);
        addEpisode('https://sinalpublico.com/player3/server15hlb.php?vid=THEROKET03EP06', 6);
        addEpisode('https://sinalpublico.com/player3/server15hlb.php?vid=THEROKET03EP07', 7);
        addEpisode('https://sinalpublico.com/player3/server15hlb.php?vid=THEROKET03EP08', 8);
        addEpisode('https://sinalpublico.com/player3/server15hlb.php?vid=THEROKET03EP09', 9);
        addEpisode('https://sinalpublico.com/player3/server15hlb.php?vid=THEROKET03EP10', 10);
        addEpisode('https://sinalpublico.com/player3/server15hlb.php?vid=THEROKET03EP11', 11);
        addEpisode('https://sinalpublico.com/player3/server15hlb.php?vid=THEROKET03EP12', 12);
        addEpisode('https://sinalpublico.com/player3/server15hlb.php?vid=THEROKET03EP13', 13);
        addEpisode('https://sinalpublico.com/player3/server15hlb.php?vid=THEROKET03EP14', 14);
    }


    /* TEMPORADA 4 */
    else if (TEMPORADA === 'temporada4') {
        addEpisode('https://sinalpublico.com/player3/server17hlb.php?vid=THEROKET04EP01', 1);
        addEpisode('https://sinalpublico.com/player3/server17hlb.php?vid=THEROKET04EP02', 2);
        addEpisode('https://sinalpublico.com/player3/server17hlb.php?vid=THEROKET04EP03', 3);
        addEpisode('https://sinalpublico.com/player3/server17hlb.php?vid=THEROKET04EP04', 4);
        addEpisode('https://sinalpublico.com/player3/server17hlb.php?vid=THEROKET04EP05', 5);
        addEpisode('https://sinalpublico.com/player3/server17hlb.php?vid=THEROKET04EP06', 6);
        addEpisode('https://sinalpublico.com/player3/server17hlb.php?vid=THEROKET04EP07', 7);
        addEpisode('https://sinalpublico.com/player3/server17hlb.php?vid=THEROKET04EP08', 8);
        addEpisode('https://sinalpublico.com/player3/server17hlb.php?vid=THEROKET04EP09', 9);
        addEpisode('https://sinalpublico.com/player3/server17hlb.php?vid=THEROKET04EP10', 10);
        addEpisode('https://sinalpublico.com/player3/server17hlb.php?vid=THEROKET04EP11', 11);
        addEpisode('https://sinalpublico.com/player3/server18hlb.php?vid=THEROKET04EP12', 12);
        addEpisode('https://sinalpublico.com/player3/server18hlb.php?vid=THEROKET04EP13', 13);
        addEpisode('https://sinalpublico.com/player3/server18hlb.php?vid=THEROKET04EP14', 14);
        addEpisode('https://sinalpublico.com/player3/server18hlb.php?vid=THEROKET04EP15', 15);
        addEpisode('https://sinalpublico.com/player3/server18hlb.php?vid=THEROKET04EP16', 16);
        addEpisode('https://sinalpublico.com/player3/server18hlb.php?vid=THEROKET04EP17', 17);
        addEpisode('https://sinalpublico.com/player3/server18hlb.php?vid=THEROKET04EP18', 18);
        addEpisode('https://sinalpublico.com/player3/server18hlb.php?vid=THEROKET04EP19', 19);
        addEpisode('https://sinalpublico.com/player3/server18hlb.php?vid=THEROKET04EP20', 20);
        addEpisode('https://sinalpublico.com/player3/server18hlb.php?vid=THEROKET04EP21', 21);
        addEpisode('https://sinalpublico.com/player3/server18hlb.php?vid=THEROKET04EP22', 22);

    }

    /* TEMPORADA 5 */
    else if (TEMPORADA === 'temporada5') {
        addEpisode('https://sinalpublico.com/player3/server20hlb.php?vid=THEROKET05EP01', 1);
        addEpisode('https://sinalpublico.com/player3/server20hlb.php?vid=THEROKET05EP02', 2);
        addEpisode('https://sinalpublico.com/player3/server20hlb.php?vid=THEROKET05EP03', 3);
        addEpisode('https://sinalpublico.com/player3/server20hlb.php?vid=THEROKET05EP04', 4);
        addEpisode('https://sinalpublico.com/player3/server21hlb.php?vid=THEROKET05EP05', 5);
        addEpisode('https://sinalpublico.com/player3/server21hlb.php?vid=THEROKET05EP06', 6);
        addEpisode('https://sinalpublico.com/player3/server21hlb.php?vid=THEROKET05EP07', 7);
        addEpisode('https://sinalpublico.com/player3/server21hlb.php?vid=THEROKET05EP08', 8);
        addEpisode('https://sinalpublico.com/player3/server21hlb.php?vid=THEROKET05EP09', 9);
        addEpisode('https://sinalpublico.com/player3/server21hlb.php?vid=THEROKET05EP10', 10);
        addEpisode('https://sinalpublico.com/player3/server21hlb.php?vid=THEROKET05EP11', 11);
        addEpisode('https://sinalpublico.com/player3/server21hlb.php?vid=THEROKET05EP12', 12);
        addEpisode('https://sinalpublico.com/player3/server21hlb.php?vid=THEROKET05EP13', 13);
        addEpisode('https://sinalpublico.com/player3/server21hlb.php?vid=THEROKET05EP14', 14);
        addEpisode('https://sinalpublico.com/player3/server21hlb.php?vid=THEROKET05EP15', 15);
        addEpisode('https://sinalpublico.com/player3/server21hlb.php?vid=THEROKET05EP16', 16);
        addEpisode('https://sinalpublico.com/player3/server21hlb.php?vid=THEROKET05EP17', 17);
        addEpisode('https://sinalpublico.com/player3/server21hlb.php?vid=THEROKET05EP18', 18);
        addEpisode('https://sinalpublico.com/player3/server21hlb.php?vid=THEROKET05EP19', 19);
        addEpisode('https://sinalpublico.com/player3/server22hlb.php?vid=THEROKET05EP20', 20);
        addEpisode('https://sinalpublico.com/player3/server22hlb.php?vid=THEROKET05EP21', 21);
    }
})

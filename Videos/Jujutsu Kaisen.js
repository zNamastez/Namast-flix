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
    function AdicionarEpisodio(link, episodio) {
        var LinkEpisodio = document.createElement('a');
        LinkEpisodio.href = link;
        LinkEpisodio.target = '_blank';
        LinkEpisodio.textContent = 'Episódio ' + episodio;
        EPISODIOS.appendChild(LinkEpisodio);
    }

    /* TEMPORADAS E EPISODIOS */
    /* TEMPORADA 1 */
    if (TEMPORADA === 'temporada1') {
        AdicionarEpisodio('https://drive.google.com/file/d/1g6-Q5jN-nZmBTTlcoJrt2wCdDIsGUpr9/view?usp=drive_link', 1);
        AdicionarEpisodio('https://drive.google.com/file/d/1cXRCZ62augDKW8c2NyHsI8Oc4Y2FqCHW/view?usp=drive_link', 2);
        AdicionarEpisodio('https://drive.google.com/file/d/1bUUyx_5CZJFrcAiSHb3mgxC9QC6KBLi-/view?usp=drive_link', 3);
        AdicionarEpisodio('https://drive.google.com/file/d/1FLsM4fhr3t6Noah_Zmh7BcO7fZ1YFubs/view?usp=drive_link', 4);
        AdicionarEpisodio('https://drive.google.com/file/d/1AXJR39FmH4EB48ud8cYyzHP-8uym0Y_y/view?usp=drive_link', 5);
        AdicionarEpisodio('https://drive.google.com/file/d/1DNfAh32Q3KVArvQXboMdKMUfcgRwaOUi/view?usp=drive_link', 6);
        AdicionarEpisodio('https://drive.google.com/file/d/1dCdKZgj8t7OGRaDPTBcgFtGOyEs0emEY/view?usp=drive_link', 7);
        AdicionarEpisodio('https://drive.google.com/file/d/1-5EU-6B_iFgqyoeA0kqcK8xNn9634kkL/view?usp=drive_link', 8);
        AdicionarEpisodio('https://drive.google.com/file/d/1FeIIaMZTWZdN0gC5_fU9Eg_KIiavU2Yi/view?usp=drive_link', 9);
        AdicionarEpisodio('https://drive.google.com/file/d/1cV3Lz6nVZC8KjkolXRGwg5kOuE_2fah6/view?usp=drive_link', 10);
        AdicionarEpisodio('https://drive.google.com/file/d/1ZytIfp7ilvtoGSIXfzm8J-Rm3nbb7XlO/view?usp=drive_link', 11);
        AdicionarEpisodio('https://drive.google.com/file/d/1e6u74VQq-PP4cPqr6Kykb_h65wzICuTp/view?usp=drive_link', 12);
        AdicionarEpisodio('https://drive.google.com/file/d/1HKi3V5EgamffqhfYBnUfaSq2j5s0ywKa/view?usp=drive_link', 13);
        AdicionarEpisodio('https://drive.google.com/file/d/14czqRjL3WqIXemfzY2T0h6JwYSwnDsWn/view?usp=drive_link', 14);
        AdicionarEpisodio('https://drive.google.com/file/d/1Emwrih8iDo1vXVc9O0uLWj6OqFuU4eUo/view?usp=drive_link', 15);
        AdicionarEpisodio('https://drive.google.com/file/d/1kN3hMmkV3pIuS4Jes8bwV0dOofT2tgxO/view?usp=drive_link', 16);
        AdicionarEpisodio('https://drive.google.com/file/d/1q6n7PY3Ut9WjhKtgvc1W-px1FpRz6ocy/view?usp=drive_link', 17);
        AdicionarEpisodio('https://drive.google.com/file/d/1qhvdfuaP-eHLS7VDhRdBjyoSGCmoq8B4/view?usp=drive_link', 18);
        AdicionarEpisodio('https://drive.google.com/file/d/1Unv2T0LNUUDsW3txH1ZeVfbnFOpZ4X8Z/view?usp=drive_link', 19);
        AdicionarEpisodio('https://drive.google.com/file/d/1J7foR5ba8coa8aOjuRZ4JsMXU6cJzqJt/view?usp=drive_link', 20);
        AdicionarEpisodio('https://drive.google.com/file/d/1l-uuhMSB_2YeH3YApDB-XcyoIeD4_tTu/view?usp=drive_link', 21);
        AdicionarEpisodio('https://drive.google.com/file/d/1G_9i2Q7TkaTJIo_N_EOwEPzdPZ95L_8z/view?usp=drive_link', 22);
        AdicionarEpisodio('https://drive.google.com/file/d/1VgGrW7X2uZN0K4mxAms2PS3o6v955NFH/view?usp=drive_link', 23);
        AdicionarEpisodio('https://drive.google.com/file/d/1E-5Aw0L5IVMGmfY0eMh0guo7Fbsdmedf/view?usp=drive_link', 24);
    }
    /* TEMPORADA 2 */
    else if (TEMPORADA === 'temporada2') {
        AdicionarEpisodio('https://drive.google.com/file/d/1O1f6Bmcwz1oKThIrD1oDP5vJVQOjrUlm/view?usp=drive_link', 1);
        AdicionarEpisodio('https://drive.google.com/file/d/11exjkLJGlHHgUDEiTvwAoKuAer-9POpE/view?usp=drive_link', 2);
        AdicionarEpisodio('https://drive.google.com/file/d/1LclE0HPRXljB6jDQwWaE40btOysAOsU1/view?usp=drive_link', 3);
        AdicionarEpisodio('https://drive.google.com/file/d/1lVhmhNGK5BFob2tCn9vtSrrN-VVRfw-n/view?usp=drive_link', 4);
        AdicionarEpisodio('https://drive.google.com/file/d/1Ai2PmbUwz9tg_notgnXHWyW7togyNHbg/view?usp=drive_link', 5);
    }

});

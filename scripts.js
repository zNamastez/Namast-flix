// Lista dos videos
const VIDEOSDATA = [
    {
        /* VIKINGS */
        Titulo: "Vikings",
        Imagem: 'https://m.media-amazon.com/images/M/MV5BZWNlZmNiNzItYWMwNC00ODYxLThlNjYtMjU3NzlmNDQxMTY2XkEyXkFqcGdeQXVyMTA3MzQ4MTc0._V1_.jpg',
        Tipo: 'serie',
        ID: 'tt2306299'
    },

    {
        /* JUJUTSU KAISEN */
        Titulo: "Jujutsu Kaisen",
        Imagem: 'https://m.media-amazon.com/images/M/MV5BMTMwMDM4N2EtOTJiYy00OTQ0LThlZDYtYWUwOWFlY2IxZGVjXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg',
        Tipo: 'serie',
        ID: 'tt12343534'
    },
    {
        /* THE ROOKIE */
        Titulo: 'The Rookie',
        Imagem: 'https://m.media-amazon.com/images/M/MV5BOTY5OWFmMzAtZTIxYi00NGM4LTk3YWMtY2MyYzMwOWVhZWM0XkEyXkFqcGdeQXVyMzAzNTY3MDM@._V1_.jpg',
        Tipo: 'serie',
        ID: 'tt7587890'
    },

    {
        /* O LOBO DE WALL STREET */
        Titulo: 'O Lobo de Wall Street',
        Imagem: 'https://m.media-amazon.com/images/M/MV5BZTk1Y2ViODktYjc5Mi00MTQwLWI1ZjItODQwYmI1NDQzMDU0XkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg',
        Tipo: 'filme',
        ID: 'tt0993846'
    },

    {
        /* Halo */
        Titulo: 'Halo',
        Imagem: 'https://m.media-amazon.com/images/M/MV5BYmY5YmJiM2QtNjdhOC00NjRhLTgyNDEtYmM1NmJhNjc5NDE2XkEyXkFqcGdeQXVyMjQ4ODcxNTM@._V1_.jpg',
        Tipo: 'serie',
        ID: 'tt2934286'
    },

    {
        /* Fire Country */
        Titulo: 'Fire Country',
        Imagem: 'https://m.media-amazon.com/images/M/MV5BYTBkZjVlNDItZTM3Mi00MzU2LTk5YzItYjE2MmMzMGVjZDRiXkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_.jpg',
        Tipo: 'serie',
        ID: 'tt16098700'
    },

    {
        /* Grey's Anatomy */
        Titulo: "Grey's Anatomy",
        Imagem: 'https://m.media-amazon.com/images/M/MV5BODA2Mjk0N2MtNGY0Mi00ZWFjLTkxODEtZDFjNDg4ZDliMGVmXkEyXkFqcGdeQXVyMzAzNTY3MDM@._V1_.jpg',
        Tipo: 'serie',
        ID: 'tt0413573'
    },

    {
        /* Feriado Sangrento */
        Titulo: 'Feriado Sangrento',
        Imagem: 'https://m.media-amazon.com/images/M/MV5BMzg5YjhjMjUtZjgyYi00YzA1LWI4NjYtNTgyOGNhMTNhNmU5XkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg',
        Tipo: 'filme',
        ID: 'tt1448754'
    },

    {
        /* Game of Thrones */
        Titulo: 'Game of Thrones',
        Imagem: 'https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg',
        Tipo: 'serie',
        ID: 'tt0944947'
    },

    {
        /* Matrix */
        Titulo: 'Matrix',
        Imagem: 'https://m.media-amazon.com/images/M/MV5BMzYxZGIyM2MtZDQ0NC00Y2M5LTk0NTAtNDk5ZTg1MjZjMTFiXkEyXkFqcGdeQXVyMTY4MjE1MDA@._V1_.jpg',
        Tipo: 'filme',
        ID: 'tt0133093'
    },

];

/* Função para exibir o card dos vídoes */
function DisplayVideos() {
    const VIDEOSCONTAINER = document.getElementById("Videos");

    VIDEOSDATA.forEach(Video => {
        const VIDEOCARD = document.createElement("div");
        VIDEOCARD.classList.add("Video-Card");
        VIDEOCARD.innerHTML = `
            <h3>${Video.Titulo}</h3>
            <img src="${Video.Imagem}" usemap="#${Video.Titulo}-map" width='350' height='550'>
            <map name="${Video.Titulo}-map">
                <area target="" alt="" title="" href="https://embed.warezcdn.com/${Video.Tipo}/${Video.ID}" coords="0,7,680,995" shape="rect" >
            </map>`;
        VIDEOSCONTAINER.appendChild(VIDEOCARD);
    });
}

/* Chamar a função quando carregar a página */
window.onload = DisplayVideos()

/* Função para mostrar o formulário */
function MostrarFormulario() {
    document.getElementById('formulario').style.display = 'block';
    document.getElementById('indicar').style.display = 'none'
}

/* Função para salvar o formulário */

function SalvarIndicacao() {
    var INDICACAO = document.getElementById('input-indicar').value;
    document.getElementById('formulario').style.display = 'none';
    document.getElementById('indicar').style.display = 'block'
    alert('Voce indicou: ' + INDICACAO)
}

// Função para exibir o aviso
function exibirAviso(mensagem) {
    const avisoContainer = document.getElementById('avisoContainer');
    const avisoMensagem = document.getElementById('avisoMensagem');

    avisoMensagem.innerHTML = mensagem;
    avisoContainer.style.display = 'flex';
}

// Função para fechar o aviso
function fecharAviso() {
    const avisoContainer = document.getElementById('avisoContainer');
    avisoContainer.style.display = 'none';
}

// Função para verificar se a mensagem já foi exibida
function verificarExibicaoAviso() {
    return localStorage.getItem('avisoExibido');
}

// Função para marcar a mensagem como exibida
function marcarAvisoExibido() {
    localStorage.setItem('avisoExibido', 'true');
}

// Função para exibir o aviso somente se não tiver sido exibido antes
function exibirAvisoSomentePrimeiraVez(mensagem) {
    if (!verificarExibicaoAviso()) {
        exibirAviso(mensagem);
        marcarAvisoExibido();
    }
}

exibirAvisoSomentePrimeiraVez(`

Para melhor experiência recomendo a instalação de um adblocker!
<br>
<br>
Se você estiver acessando pelo Pc: <a href="https://chromewebstore.google.com/detail/adblock-%E2%80%94-o-melhor-bloque/gighmmpiobklfepjocnamgkkbiglidom?utm_source=chrome-ntp-icon" target="_blank" style="text-decoration: none; color: white;">AdBlock</a>
<br>
<br>
Se você estiver acessando pelo Android: <a href="https://play.google.com/store/apps/details?id=com.betafish.adblocksbrowser" target="_blank" style="text-decoration: none; color: white;">AdBlock para Samsung Internet</a>
<br>
<br>
Foi mal, não encontrei nenhum pra IOS ;_;
`);

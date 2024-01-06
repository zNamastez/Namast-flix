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
const AdBlock = '<a href="https://microsoftedge.microsoft.com/addons/detail/adblock-%E2%80%94-o-melhor-bloque/ndcileolkflehcjpmjnfbnaibdcgglog?hl=pt-BR" targer="_blank">AdBlock</a>'
const AdBlockMobile = '<a href="https://play.google.com/store/apps/details?id=com.betafish.adblocksbrowser&pli=1">AdBlock para Samsung Internet</a>'
const SamsungInternet = '<a href="https://play.google.com/store/apps/details?id=com.sec.android.app.sbrowser">Samsung Internet</a>'

// Exemplo de uso
exibirAvisoSomentePrimeiraVez(`Por ser gratuito os players dos videos tem alguns anúncios, mas como o intuito do site é fornecer filmes e séries com a menor quantidade de anúncio possível recomendo a instalação de um adblock para melhor experiência!
<br>
<br>
Se estiver acessando pelo Pc: ${AdBlock}
<br>
<br>
Se estiver acessando pelo Android, recomento baixar o Samsung Internet e o AdBlock:
<br>
${SamsungInternet}
<br>
${AdBlockMobile}
<br>
<br>
Foi mal, não encontrei nenhum pra IOS ;_;`);

// Adiciona um ouvinte de evento de mudança ao dropdown
document.getElementById('selecao').addEventListener('change', function () {
    // Obtém o valor da opção selecionada
    var TEMPORADA = this.value;

    if (TEMPORADA === 'temporada1') {
        const EP = document.getElementById('Ep')
        const EPISODIOS = document.createElement("div")
        EPISODIOS.classList.add('eps')
        EPISODIOS.innerHTML = `
        <a href="https://sinalpublico.com/player3/server5http2hlb.php?vid=VKGST01EP01" target='_blank'>
        Episódio 1</a>

        <a href="https://sinalpublico.com/player3/server5http2hlb.php?vid=VKGST01EP02" target='_blank'>
        Episódio 2</a>

        <a href="https://sinalpublico.com/player3/server5http2hlb.php?vid=VKGST01EP03" target='_blank'>
        Episódio 3</a>

        <a href="https://sinalpublico.com/player3/server5http2hlb.php?vid=VKGST01EP04" target='_blank'>
        Episódio 4</a>

        <a href="https://sinalpublico.com/player3/server5http2hlb.php?vid=VKGST01EP05" target='_blank'>
        Episódio 5</a>

        <a href="https://sinalpublico.com/player3/server5http2hlb.php?vid=VKGST01EP06" target='_blank'>
        Episódio 6</a>

        <a href="https://sinalpublico.com/player3/server5http2hlb.php?vid=VKGST01EP07" target='_blank'>
        Episódio 7</a>

        <a href="https://sinalpublico.com/player3/server5http2hlb.php?vid=VKGST01EP08" target='_blank'>
        Episódio 8</a>

        <a href="https://sinalpublico.com/player3/server5http2hlb.php?vid=VKGST01EP09" target='_blank'>
        Episódio 9</a>`
        EP.appendChild(EPISODIOS);
    }
});

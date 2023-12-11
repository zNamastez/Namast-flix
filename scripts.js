// Lista dos videos
const VIDEOSDATA = [
    {
        /* VIKINGS */
        Titulo: "Vikings",
        Imagem: 'https://th.bing.com/th/id/R.61c8224e507d2a3f1799b39fdfa68c27?rik=YUNI8qcXcTPUUA&riu=http%3a%2f%2fwww.anarchogeekreview.com%2fwp-content%2fuploads%2f2014%2f02%2f467097-vikings-vikings-poster.jpg&ehk=vU9ikuPT6VjoM%2buEaQuerz1Ti%2f%2bWrj%2bRbg1VCWX4KmU%3d&risl=&pid=ImgRaw&r=0',
    },

    {
        /* JUJUTSU KAISEN */
        Titulo: "Jujutsu Kaisen",
        Imagem: 'https://i.redd.it/a21f46syv1n51.jpg',
    },
    {
        /* THE ROOKIE */
        Titulo: 'The Rookie',
        Imagem: 'https://th.bing.com/th/id/R.3dd57bcba801353cb6a307145bd12e48?rik=AdFg43HpPolDLQ&pid=ImgRaw&r=0',
    }
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
                <area target="" alt="" title="" href="Videos/Html/${Video.Titulo}.html" coords="0,7,680,995" shape="rect" >
            </map>`;
        VIDEOSCONTAINER.appendChild(VIDEOCARD);
    });
}

/* Chamar a função quando carregar a página */
window.onload = DisplayVideos()
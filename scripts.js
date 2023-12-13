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
    },

    {
        /* O LOBO DE WALL STREET */
        Titulo: 'O Lobo de Wall Street',
        Imagem: 'https://th.bing.com/th/id/R.5fd274b4c3d71a9ea1f40c1b13ef7520?rik=qKf231rRKUc%2fRA&riu=http%3a%2f%2f2.bp.blogspot.com%2f-gWXOpIuXCLw%2fUzNVCBUVQ3I%2fAAAAAAAAF10%2fNpHk0ssmSSo%2fs1600%2flobo%2bde%2bwall%2bstreet%2bfrente.jpg&ehk=0xtsCOtqNHWiC6cYHmVhIplUWdfEPL8dDMX8wjXHiYA%3d&risl=&pid=ImgRaw&r=0',
    }

];

/* FunÃ§Ã£o para exibir o card dos vÃ­does */
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

/* Chamar a funÃ§Ã£o quando carregar a pÃ¡gina */
window.onload = DisplayVideos()

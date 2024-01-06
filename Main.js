fetch('https://imdb188.p.rapidapi.com/api/v1/getWeekTop10', {
    "method": 'GET',
    "headers": {
        'X-RapidAPI-Key': '0d283ded23msh65bbca24c4af428p198869jsnad57c7989950',
        'X-RapidAPI-Host': 'imdb188.p.rapidapi.com',
    }
})
    .then(response => response.json())
    .then(data => {
        const list = data.data;

        list.map((item) => {

            console.log(item)

            const name = item.originalTitleText.text;
            const poster = item.primaryImage.imageUrl;
            const id = item.id;
            let type = item.titleType.id
            if (type === "movie") {
                type = "filme";
            }
            else {
                type = "serie";
            }
            const movie = `<li><img src="${poster}" usemap="#${name}-map""><map name="${name}-map">
            <area target="" alt="" title="" href="https://embed.warezcdn.com/${type}/${id}" coords="0,7,680,995" shape="rect">
        </map><h2>${name}</h2></li>`;

            document.querySelector('.Videos').innerHTML += movie;
        })
    })
    .catch(err => {
        console.error(err);
    });

// Selecione o botão e o campo de entrada
const button = document.querySelector('button');
const input = document.getElementById('Searching');

// Adicione um ouvinte de evento de clique ao botão
button.addEventListener('click', function () {

    clearVideos()

    // Obtenha o valor digitado no campo de entrada
    const inputValue = input.value;

    fetch('https://imdb188.p.rapidapi.com/api/v1/searchIMDB?query=' + inputValue, {
        "method": 'GET',
        "headers": {
            'X-RapidAPI-Key': '0d283ded23msh65bbca24c4af428p198869jsnad57c7989950',
            'X-RapidAPI-Host': 'imdb188.p.rapidapi.com',
        }
    })
        .then(response => response.json())
        .then(data => {
            const list = data.data;

            list.map((item) => {

                console.log(item)

                const name = item.title;
                const poster = item.image;
                const id = item.id;
                let type = item.qid
                if (type === "movie") {
                    type = "filme";
                }
                else {
                    type = "serie";
                }
                const movie = `<li><img src="${poster}" usemap="#${name}-map""><map name="${name}-map">
            <area target="" alt="" title="" href="https://embed.warezcdn.com/${type}/${id}" coords="0,7,680,995" shape="rect">
        </map><h2>${name}</h2></li>`;

                document.querySelector('.Videos').innerHTML += movie;
                input.value = ""
            })
        })
        .catch(err => {
            console.error(err);
        });
});

function clearVideos() {
    document.querySelector('.Videos').innerHTML = ''; // Limpa o conteúdo da div 'Videos'
}


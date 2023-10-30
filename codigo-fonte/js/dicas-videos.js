function buscarVideosDoYouTube() {
    let divVideos = document.getElementById("videosYoutube");
    let query = "educação financeira";
    let apiKey = "AIzaSyCelOGg2nRUZamOwDYdTACjdQIloWCYgCg";
    let url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&q=${query}&maxResults=4&type=video`;

    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = function () {
        if (xhr.status === 200) {
            let response = JSON.parse(xhr.responseText);
            if (response.items) {
                for (let i = 0; i < response.items.length; i++) {
                    let item = response.items[i];
                    let videoId = item.id.videoId;
                    let videoTitle = item.snippet.title;
                    let videoElement = document.createElement("div");
                    videoElement.innerHTML = `
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                        <h3>${videoTitle}</h3>
                    `;
                    divVideos.appendChild(videoElement);
                }
            } else {
                divVideos.innerHTML = "Nenhum vídeo encontrado.";
            }
        } else if (xhr.status === 403) {
           
            divVideos.innerHTML = "Limite de busca da API excedido.";
        } else {
            console.error("Erro ao buscar vídeos do YouTube.");
        }
    };
    xhr.send();
}


buscarVideosDoYouTube();
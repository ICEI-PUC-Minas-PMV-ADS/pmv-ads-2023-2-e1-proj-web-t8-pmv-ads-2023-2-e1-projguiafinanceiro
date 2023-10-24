function carregarVideosDoYouTube() {
    var divVideos = document.getElementById("videosYoutube");
    var query = "educação financeira";
    var url = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDi0LELx8_YR4Ykt0y9AGGQkg4kUQBCycg&part=snippet&q=" + query + "&maxResults=4&type=video";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = function () {
        if (xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            if (response.items) {
                for (var i = 0; i < response.items.length; i++) {
                    var item = response.items[i];
                    var videoId = item.id.videoId;
                    var videoTitle = item.snippet.title;
                    var videoThumbnail = item.snippet.thumbnails.medium.url;
                    var videoElement = document.createElement("div");
                    videoElement.innerHTML = `
            <iframe width="530" height="300" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
            <h3>${videoTitle}</h3>
          `;
                    divVideos.appendChild(videoElement);
                }
            } else {
                divVideos.innerHTML = "Nenhum vídeo encontrado.";
            }
        } else {
            console.error("Erro ao buscar vídeos do YouTube.");
        }
    };
    xhr.send();
}
carregarVideosDoYouTube();
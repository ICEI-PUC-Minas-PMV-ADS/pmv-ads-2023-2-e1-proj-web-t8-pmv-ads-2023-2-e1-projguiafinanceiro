function carregarMaterias() {
    let divMaterias = document.querySelector(".materias");
    let query = "princípios educação financeira";
    let apiKey = "ad0366a3a3744e59b9521b0c0a381d8b";
    let url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.articles) {
                data.articles.forEach(article => {
                    let articleElement = document.createElement("div");
                    articleElement.innerHTML = `
                        <h3>${article.title}</h3>
                        <p>${article.description}</p>
                        <a href="${article.url}" target="_blank">Leia mais</a>
                    `;
                    divMaterias.appendChild(articleElement);
                });
            } else {
                divMaterias.innerHTML = "Nenhuma matéria encontrada.";
            }
        })
        .catch(error => {
            console.error("Erro ao buscar matérias: " + error);
        });
}

carregarMaterias();

document.addEventListener("DOMContentLoaded", function() {
    const apiKey = '183b6eb97e7e4ac4b5e6213afb8956ba'; // Haber API anahtarını buraya yerleştir
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const apiUrl = `https://newsapi.org/v2/everything?q=(hukuk OR mahkeme OR boşanma)&language=tr&apiKey=${apiKey}`;

fetch(proxyUrl + apiUrl)
    .then(response => response.json())
    .then(data => {
        // Haberleri işle
    })
    .catch(error => {
        // Hata durumunu işle
    });

    // Haberleri çek
    fetch(`https://newsapi.org/v2/everything?q=(hukuk OR mahkeme OR boşanma)&language=tr&apiKey=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const newsList = document.getElementById('news-list');
            newsList.innerHTML = ''; // Önceki haberleri temizle

            data.articles.forEach(article => {
                const li = document.createElement('li');
                const title = document.createElement('h3');
                const description = document.createElement('p');

                title.textContent = article.title;
                description.textContent = article.description;

                li.appendChild(title);
                li.appendChild(description);
                newsList.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Haberleri çekerken bir hata oluştu:', error);
        });
});

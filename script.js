document.addEventListener("DOMContentLoaded", function() {
    const apiKey = 'pub_408328719e83be100b603329bbbbd86ee7566'; // newsdata.io API anahtarını buraya yerleştir
    const query = encodeURIComponent('(hukuk OR mahkeme OR boşanma)'); // Arama sorgusunu URL uyumlu hale getir

    // Haberleri çek
    fetch(`https://api.newsdata.io/v1/news?q=${query}&language=tr&api_key=${apiKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Haberleri çekerken bir hata oluştu.');
            }
            return response.json();
        })
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

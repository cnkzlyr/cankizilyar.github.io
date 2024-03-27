document.addEventListener("DOMContentLoaded", function() {
    const apiKey = '183b6eb97e7e4ac4b5e6213afb8956ba'; // Haber API anahtarını buraya yerleştir

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
// script.js (devamı)

// Hata durumunda haber listesini gizle ve hata mesajını göster
function displayError(message) {
    const newsContainer = document.querySelector('.news-container');
    const errorMessage = document.createElement('p');
    errorMessage.textContent = message;
    errorMessage.style.color = 'red';
    newsContainer.appendChild(errorMessage);
    document.getElementById('news-list').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function() {
    const apiKey = 'YOUR_NEWSAPI_KEY'; // Haber API anahtarını buraya yerleştir

    // Haberleri çek
    fetch(`https://newsapi.org/v2/everything?q=(hukuk OR mahkeme OR boşanma)&language=tr&apiKey=${apiKey}`)
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
            displayError('Haberleri çekerken bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
        });
});

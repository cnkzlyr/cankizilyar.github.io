document.addEventListener('DOMContentLoaded', async function () {
    const apiKey = 'pub_408328719e83be100b603329bbbbd86ee7566';
    const baseUrl = 'https://api.newsdata.io/v1';
    const newsContainer = document.getElementById('news-container');
    const logContainer = document.getElementById('log-container'); // Logları göstereceğimiz alan
    
    try {
        const keywords = ["hukuk", "Fenerbahçe", "boşanma"];
        const response = await fetch(`${baseUrl}/news?apiKey=${apiKey}&q=${keywords.join(' AND ')}`);
        const data = await response.json();
        logContainer.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`; // API yanıtını HTML içine yaz
        console.log(data); // API yanıtını konsola yazdır
        
        if(data.articles.length === 0) {
            newsContainer.innerHTML = '<p>Haberler bulunamadı.</p>';
        } else {
            data.articles.forEach(article => {
                const articleElement = document.createElement('div');
                articleElement.classList.add('news-article');
                articleElement.innerHTML = `
                    <h2>${article.title}</h2>
                    <p>${article.description}</p>
                    <a href="${article.url}" target="_blank">Haberi Oku</a>
                `;
                newsContainer.appendChild(articleElement);
            });
        }
    } catch (error) {
        console.error('Haberler alınırken bir hata oluştu:', error);
        newsContainer.innerHTML = '<p>Haberler alınamadı.</p>';
    }
});
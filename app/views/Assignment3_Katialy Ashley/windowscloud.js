
function fetchTextFromURL(url) {
    return fetch(url)
        .then(response => response.text())
        .catch(error => {
            console.error('Failed to fetch text from the URL:', error);
            return null;
        });
}

function generateWordCloud() {
    const urlInput = document.getElementById('url-input');
    const url = urlInput.value.trim();

    if (!url) {
        alert('Please enter a valid URL.');
        return;
    }
    fetchTextFromURL(url)
        .then(text => {
            if (text) {
                const wordFrequencyMap = getWordFrequencyMap(text);
                displayWordCloud(wordFrequencyMap);
            } else {
                alert('Failed to fetch text from the URL.');
            }
        });
}
function getWordFrequencyMap(text) {
    const words = text.toLowerCase().match(/\b\w+\b/g) || [];
    const wordFrequencyMap = {};

    words.forEach(word => {
        wordFrequencyMap[word] = wordFrequencyMap[word] ? wordFrequencyMap[word] + 1 : 1;
    });

    return wordFrequencyMap;
}
function displayWordCloud(wordFrequencyMap) {
    const wordCloudContainer = document.getElementById('wordcloud-container');
    wordCloudContainer.innerHTML = '';

    const wordCloudOptions = {
        list: Object.entries(wordFrequencyMap).map(([word, frequency]) => ({ text: word, weight: frequency })),
        gridSize: 10,
        fontFamily: 'Arial, sans-serif',
        color: 'random-dark',
        backgroundColor: '#ffffff',
        rotateRatio: 0.5,
    };

    WordCloud(document.getElementById('wordcloud-container'), wordCloudOptions);
}
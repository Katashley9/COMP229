document.addEventListener('DOMContentLoaded', () => {
    const convertBtn = document.getElementById('convert-btn');
    convertBtn.addEventListener('click', convertToJSON);
});

function convertToJSON() {
    fetch('data.csv') // Fetch the "data.csv" file
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch data.csv. Make sure the file exists in the same location as your HTML page.');
            }
            return response.text();
        })
        .then(csvData => {
            const jsonData = csvToJSON(csvData);
            console.log(jsonData);
        })
        .catch(error => {
            alert(error.message);
            console.error(error);
        });
}

function csvToJSON(csvData) {
    const jsonData = JSON.parse(csvData);
    return jsonData;
}

// document.addEventListener('DOMContentLoaded', () => {
//     const convertBtn = document.getElementById('convert-btn');
//     convertBtn.addEventListener('click', convertToJSON);
// });
// function convertToJSON() {
//     const fileInput = document.getElementById('csv-file');
//     const file = fileInput.files[0];

//     if (!file) {
//         alert('Please select a file first.');
//         return;
//     }

//     if (file.type !== 'text/csv') {
//         alert('Please select a .csv file.');
//         fileInput.value = '';
//         return;
//     }

//     const reader = new FileReader();

//     reader.onload = function (event) {
//         const csvData = event.target.result;
//         const jsonData = csvToJSON(csvData);

//         // You can now use the jsonData for further processing.

//         // For simplicity, let's just log the JSON data to the console.
//         console.log(jsonData);
//     };

//     reader.readAsText(file);
// }
// function csvToJSON(csvData) {
//     const lines = csvData.split('\n');
//     const result = [];
//     const headers = lines[0].split(',');

//     for (let i = 1; i < lines.length; i++) {
//         const obj = {};
//         const currentLine = lines[i].split(',');

//         for (let j = 0; j < headers.length; j++) {
//             obj[headers[j]] = currentLine[j];
//         }

//         result.push(obj);
//     }

//     return result;
// }











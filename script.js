const fetchDataButton = document.getElementById('fetch-data');
const outputDiv = document.getElementById('output');

fetchDataButton.addEventListener('click', () => {


    const options = {
        method: 'GET',
        
    };

    fetch(url, options)
        .then(function(response){
            return response.json()
        })
        .then(function(jsondata){
            outputDiv.textContent = jsondata.code
        })
});

// #1 - In this challenge you will build a function 'whereAmI' which renders a country only based on GPS coordinates. For that, you will use a second API to geocode coordinates. 

//#1.1 - Create a function 'whereAmI' which takes as inputs a latitude value ('lat') and a longitude value ('lng') (these are GPS coordinates, examples are in test data below).
function whereAmI(lat, lng) {

    /*#1.2 - Do “reverse geocoding” of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name.
            Use this API to do reverse geocoding: https://geocode.xyz/api. 
            The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. */

    const request = fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
        .then(response => {

            /*#1.5 - This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. 
            Remember, fetch() does not reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message */
            if (!response.ok) {
                throw new Error("It's not possible to make multiple requests per second. Please wait a moment and try again.");
            }

            return response.json();
        })

        /*#1.3 - Once you have the data, take a look at it in the console to see all the attributes that you received about the provided location. 
        Then, using this data, log a message like this to the console: “You are in Berlin, Germany”*/
        .then(data => {
            console.log(`You are in ${data.state}, ${data.country}`);

            /*#1.6 - Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, 
            and plug it into the countries API that we have been using.*/
            return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
        })
            //#1.7 - Render the country and catch any errors, just like we have done in the last lecture.
            .then(response => {

                if(!response.ok){
                    throw new Error("It was not possible to get the country. Please try again later.")
                }
                return response.json();
            })
            .then(data => {
                showCountry(data[0]);
            })
        //#1.4 - Chain a .catch method to the end of the promise chain and log errors to the console.
        .catch(err => console.log(`Error: ${err.message}`));
}

function showCountry(data){
    const countriesCtn = document.querySelector('.countries');

    countriesCtn.innerHTML = "";

    const HTML = `
        <article>
            <img class="country__img" src="${data.flag}"/>
            <div>
                <h3>You are in ${data.name}!</h3>
                <h4>${data.region}</h4>
                <p><span>👫</span>${(data.population/1000000).toFixed(1)} M people </p>
                <p><span>🗣️</span>${data.languages[0].name} </p>
                <p><span>💰</span>${data.currencies[0].name} </p>
            </div>
        </article>
    `;

    countriesCtn.insertAdjacentHTML('beforeend', HTML);
    countriesCtn.style.opacity = 1;
}

function getRandomData(){
    var random = Math.trunc(Math.random() * (3 - 1 + 1) + 1);

    switch (random) {
        case 1:
            whereAmI(52.508, 13.381);
            break;
    
        case 2:
            whereAmI(19.037, 72.873);
            break;
        case 3: 
            whereAmI(-33.933, 18.474);
            break;
    }
}

    //Using XMLHttpRequest
    /*const request = new XMLHttpRequest();
    request.open('POST', `https://geocode.xyz/${lat},${lng}?json`);
    request.send();

    request.addEventListener('load', function(){
        //const data = JSON.parse(this.responseText);
        console.log(this.responseText);
    })*/
//1. Create an async function called getCountries

async function getCountries(url){
    try{
        const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,population, capital,region');
        
        if(!response.ok) throw new Error('Something went wrong');

        const data = await response.json();
        console.log(data);
        displayCountries(data);
    } catch (error){
        console.log(error);
    }
}
    //Why isn't there a return for fetch?

  

    function displayCountries(data){
        data.forEach((country) => {
            countryHtml =  `
            <div class="country">
                <h3 class="country-name">${country.name.common}</h3>
                <img class="country-flag" src="${country.flags.svg}" />
                <div class="content">
                    <h3>Capital</h3>
                    <p>{${country.capital}}/p>
                    <h3>Population</h3>
                    <p>${country.population}</p>
                    <h3>Region</h3>
                    <p>${country.region}</p>
            </div>
        </div>
     `;
     document.querySelector('.countries')
     .insertAdjacentHTML('beforeend', countryHtml);
    });
    }
    

//  - retrieve the name, capital, population and flags for all countries.
//  - Convert the response to JSON.
//  - pass the data to the displayCountries function.
//  - Catch any errors and log them to the console.

//2. Create a displayCountries function that takes in an array of countries.
//  - Loop over the array of countries.
//      - Create a div for each country.
//      - Add the country name and flag to the div with the provided HTML structure.
//      - Add the created div to the `.countries` container element.

//3. Call the getCountries function.

getCountries();


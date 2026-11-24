//add additional imports here (functions from ui.js)

// Create a click event handler on the "Search" button to fetch the data.
// This will NOT call the Fetch API directly, instead it will call a function defined in api.js
// Overview of what the click handler will need to do (this will be a series of function calls):
//   - Show a loading status
//   - Fetch the data
//   - Clear the loading status
//   - Render results
//   - Include Error handling - i.e. try/catch errors

//Import the fetchData function from api.js
import {fetchData} from './api.js';

//Import the UI functions from ui.js
import {
    showLoading,
    showError,
    clearLoading,
    renderResults
}from './ui.js';

//Find the HTML elements
const searchButton = document.getElementById('search-button');

const nameInput = document.getElementById('name');

//Create a click even handler
searchButton.addEventListener('click', async() => {

    //show the loading message
    showLoading();

    try {
        //fetch the product data
        const data = await fetchData(nameInput.value);

        //clear the loading message
        clearLoading();

        //display the products
        renderResults(data.products);
    
    }catch(error) {

        //clear the loading message
        clearLoading();

        //display the error message
        showError(error.message);
    }
    
});
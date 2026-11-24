export async function fetchData(productName) {
  // Fetch data using the Fetch API, use the input value to search by product name
  // Be sure to handle errors
  //   This does not mean updating the UI with error messages
  //   Instead, throw() an error that can be captured in the calling code
  // Return the data to the calling function as a JSON object

//Make sure the user entered a product name
  if(!productName.trim()) {
    throw new Error('Please enter a product name.');
  }


  //create the API URL using the product name
  try {
    const url = `https://dummyjson.com/products/search?q=${encodeURIComponent(productName)}`;

    //send a request to the API
    const response = await fetch(url);

    //check whether the request was successful
    if(!response.ok) {
      throw new Error('Unable to retrieve product data.');
    }

    //convert the response into a JSON object
    const data = await response.json();

    //return the product data
    return data;

  } catch (error) {
    //send the error back to the calling function
    throw error;
  }
}
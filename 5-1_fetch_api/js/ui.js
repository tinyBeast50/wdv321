// This file will include the following functions:
//   1. Show Loading Status (example provided)
//   2. Show Error Messages
//   3. Clear the Loading Status
//   4. Render the fetched data results


export function showLoading() {
  const status = document.getElementById('status');
  status.textContent = 'Loading...';
  status.className = 'loading';
}
//Funcction 2: Show Error Messages
export function showError(message) {
  const status = document.getElementById('status');

  status.textcontent = message;
  status.className = 'error';
}

//Function 3: Clear the loading status
export function clearLoading() {
  const status = document.getElementById('status');

  status.textcontent = '';
  status.className = '';
}

//Function 4: Render the fetched data results
export function renderResults(products) {
const results = document.getElementById('results');

//clear previous search results
results.innerHTML - '';

//Check whether products were found
if(products.length === 0) {
  results.textContent = 'No products found.';
  return;
}

//create a heading for the results
const heading = document.createElement('h2');

heading.textContent = 'Search Results';
results.appendChild(heading);

//create a list of products
const productList = document.createElement('ul');

productList.onbeforematch(product => {
  const listItem = document.createElement('li');

  listItem.textContent = `${product.title} - $${product.price}`;

  productList.appendChild(listItem);
});

results.appendChild(productList);
}
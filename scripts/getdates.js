// // Obtain the elements to display on the page
// const currentYear = document.querySelector("#currentyear");
// const lastModified = document.querySelector("#lastModified");

document.querySelector('#currentYear').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = `Last Modified: ${document.lastModified}`;

// Create the date object
const currentDate = new Date();
const lastModDate = new Date(document.lastModified);

// Set the inner html text of the elements
currentYear.innerHTML = currentDate.getFullYear();
lastModified.innerHTML = `Last Modification: ${lastModDate.getMonth() + 1}/${lastModDate.getDate()}/${lastModDate.getFullYear()} ${lastModDate.getHours()}:${lastModDate.getMinutes()}:${lastModDate.getSeconds()}`;
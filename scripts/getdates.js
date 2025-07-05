const year = document.querySelector("#year");
const today = new Date();
year.innerHTML = `&copy;${today.getFullYear()}`;

const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = `${document.lastModified}`;
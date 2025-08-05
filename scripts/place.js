document.querySelector('#currentYear').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = `Last Modified: ${document.lastModified}`;

function displayHKMockWeather() {
    const now = new Date();
    const month = now.getMonth() + 1;
    
    let baseTemp, conditions;
    if (month >= 11 || month <= 2) {
        // Winter (Nov-Feb)
        baseTemp = 15 + Math.floor(Math.random() * 8); // 15-22°C
        conditions = ['Sunny', 'Partly Cloudy', 'Cloudy', 'Dry'][Math.floor(Math.random() * 4)];
    } else if (month >= 3 && month <= 5) {
        // Spring (Mar-May)
        baseTemp = 20 + Math.floor(Math.random() * 8); // 20-27°C
        conditions = ['Partly Sunny', 'Cloudy', 'Misty', 'Occasional Showers'][Math.floor(Math.random() * 4)];
    } else if (month >= 6 && month <= 9) {
        // Summer (Jun-Sep)
        baseTemp = 28 + Math.floor(Math.random() * 5); // 28-32°C
        conditions = ['Hot', 'Showers', 'Thunderstorms', 'Cloudy'][Math.floor(Math.random() * 4)];
    } else {
        // Autumn (Oct)
        baseTemp = 24 + Math.floor(Math.random() * 6); // 24-29°C
        conditions = ['Sunny and Dry', 'Partly Cloudy', 'Moderate NE Wind', 'Fine'][Math.floor(Math.random() * 4)];
    }
    
    const windSpeed = 5 + Math.floor(Math.random() * 25); // 5-29 km/h
 
    const windChill = Math.round((13.12 + 0.6215 * baseTemp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * baseTemp * Math.pow(windSpeed, 0.16)) * 10) / 10;
    
    document.getElementById('temperature').textContent = baseTemp;
    document.getElementById('conditions').textContent = conditions;
    document.getElementById('wind').textContent = windSpeed;
    document.getElementById('windChill').textContent = (baseTemp <= 10 && windSpeed >= 5) ? windChill : baseTemp;
}

document.addEventListener('DOMContentLoaded', displayHKMockWeather);
// events.js

function initEventsMap() {
    const eventsMap = L.map('events-map').setView([40.73061, -73.935242], 12); // Example coordinates (New York)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(eventsMap);

    fetch('chessevents.csv')
        .then(response => response.text())
        .then(csv => {
            const lines = csv.split('\n');
            lines.forEach(line => {
                const [lat, lng, title] = line.split(',');
                if (lat && lng && title) {
                    L.marker([parseFloat(lat), parseFloat(lng)]).addTo(eventsMap)
                        .bindPopup(title);
                }
            });
        })
        .catch(error => console.error('Error loading events:', error));
}

// Initialize the map after the page loads
window.onload = initEventsMap;

// events.js

function initEventsMap() {
    const eventsMap = L.map('events-map').setView([40.73061, -73.935242], 2); // World view

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(eventsMap);

    // Example markers for events
    const eventLocations = [
        { lat: 40.73061, lng: -73.935242, title: 'Chess Tournament - July 10, 2024' },
        { lat: 40.741895, lng: -73.989308, title: 'Chess Club Meetup - July 15, 2024' }
    ];

    eventLocations.forEach(location => {
        L.marker([location.lat, location.lng]).addTo(eventsMap)
            .bindPopup(location.title);
    });

}
// Initialize the map after the page loads
window.onload = initEventsMap;

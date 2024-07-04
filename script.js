// script.js

function initMap() {
    const map = L.map('map').setView([40.73061, -73.935242], 12); // Example coordinates (New York)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Example markers for events and clubs
    const locations = [
        { lat: 40.73061, lng: -73.935242, title: 'Downtown Chess Club' },
        { lat: 40.741895, lng: -73.989308, title: 'Uptown Chess Enthusiasts' },
        { lat: 40.749825, lng: -73.987963, title: 'Chess Tournament - July 10, 2024' },
        { lat: 40.758896, lng: -73.985130, title: 'Chess Club Meetup - July 15, 2024' }
    ];

    locations.forEach(location => {
        L.marker([location.lat, location.lng]).addTo(map)
            .bindPopup(location.title);
    });
}

// Initialize the map after the page loads
window.onload = initMap;

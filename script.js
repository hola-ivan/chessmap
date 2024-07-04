// script.js

function initMap() {
    // Events map
    const eventsMap = L.map('events-map').setView([40.73061, -73.935242], 12); // Example coordinates (New York)
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

    // Clubs map
    const clubsMap = L.map('clubs-map').setView([0, 0], 2); // World view

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(clubsMap);

    // Example markers for clubs (20 dummy clubs around the world)
    const clubLocations = [
        { lat: 51.505, lng: -0.09, title: 'Club 1: London Chess Club' },
        { lat: 48.8566, lng: 2.3522, title: 'Club 2: Paris Chess Club' },
        { lat: 40.7128, lng: -74.0060, title: 'Club 3: New York Chess Club' },
        { lat: 34.0522, lng: -118.2437, title: 'Club 4: Los Angeles Chess Club' },
        { lat: 35.6895, lng: 139.6917, title: 'Club 5: Tokyo Chess Club' },
        { lat: -33.8688, lng: 151.2093, title: 'Club 6: Sydney Chess Club' },
        { lat: 55.7558, lng: 37.6173, title: 'Club 7: Moscow Chess Club' },
        { lat: 52.5200, lng: 13.4050, title: 'Club 8: Berlin Chess Club' },
        { lat: 19.0760, lng: 72.8777, title: 'Club 9: Mumbai Chess Club' },
        { lat: -23.5505, lng: -46.6333, title: 'Club 10: São Paulo Chess Club' },
        { lat: 39.9042, lng: 116.4074, title: 'Club 11: Beijing Chess Club' },
        { lat: 31.2304, lng: 121.4737, title: 'Club 12: Shanghai Chess Club' },
        { lat: 35.6762, lng: 139.6503, title: 'Club 13: Chess Club Tokyo' },
        { lat: 37.7749, lng: -122.4194, title: 'Club 14: San Francisco Chess Club' },
        { lat: 43.6532, lng: -79.3832, title: 'Club 15: Toronto Chess Club' },
        { lat: 51.1657, lng: 10.4515, title: 'Club 16: Germany Chess Club' },
        { lat: 40.4168, lng: -3.7038, title: 'Club 17: Madrid Chess Club' },
        { lat: -26.2041, lng: 28.0473, title: 'Club 18: Johannesburg Chess Club' },
        { lat: -37.8136, lng: 144.9631, title: 'Club 19: Melbourne Chess Club' },
        { lat: 35.6895, lng: 139.6917, title: 'Club 20: Tokyo Chess Club' }
    ];

    clubLocations.forEach(location => {
        L.marker([location.lat, location.lng]).addTo(clubsMap)
            .bindPopup(location.title);
    });
}

// Initialize the map after the page loads
window.onload = initMap;

// script.js

function initMap() {
    const center = { lat: 40.73061, lng: -73.935242 }; // Example coordinates (New York)
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: center
    });

    // Example markers for events and clubs
    const locations = [
        { position: { lat: 40.73061, lng: -73.935242 }, title: 'Downtown Chess Club' },
        { position: { lat: 40.741895, lng: -73.989308 }, title: 'Uptown Chess Enthusiasts' },
        { position: { lat: 40.749825, lng: -73.987963 }, title: 'Chess Tournament - July 10, 2024' },
        { position: { lat: 40.758896, lng: -73.985130 }, title: 'Chess Club Meetup - July 15, 2024' }
    ];

    locations.forEach(location => {
        new google.maps.Marker({
            position: location.position,
            map: map,
            title: location.title
        });
    });
}

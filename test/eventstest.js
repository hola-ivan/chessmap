function initEventsMap() {
    const eventsMap = L.map('events-map').setView([40.73061, -73.935242], 2); // World view

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(eventsMap);

    const eventLocations = [
        { lat: 41.6168, lng: 41.6367, title: 'Batumi Municipality Cup', start: 'July 4, 2024', end: 'July 14, 2024' },
        { lat: 45.1, lng: 15.2, title: 'Grand Chess Tour: SuperUnited Croatia Rapid & Blitz 2024', start: 'July 8, 2024', end: 'July 16, 2024' },
        { lat: 49.6561, lng: 8.6189, title: 'Offene Hessische Blitz- und Schnellmeisterschaft', start: 'July 31, 2024', end: 'September 1, 2024' },
        { lat: 51.3388, lng: 6.5853, title: 'Krefelder Sommer-Open', start: 'July 31, 2024', end: 'August 8, 2024' },
        { lat: 48.6259, lng: 7.4478, title: 'Open von Wasselonne', start: 'August 1, 2024', end: 'August 4, 2024' },
        { lat: 0, lng: 0, title: 'GCT: 2024 Grand Chess Tour Finals', start: 'November 6, 2024', end: 'November 14, 2024' }
    ];

    let markers = [];

    function addMarkers(filteredEvents) {
        markers.forEach(marker => eventsMap.removeLayer(marker));
        markers = [];

        filteredEvents.forEach(location => {
            const marker = L.marker([location.lat, location.lng])
                .addTo(eventsMap)
                .bindPopup(location.title);
            markers.push(marker);
        });
    }

    function filterEvents(month) {
        if (month === 'all') {
            addMarkers(eventLocations);
            return;
        }
        const filteredEvents = eventLocations.filter(location => {
            const eventMonth = new Date(location.start).getMonth();
            return eventMonth === month;
        });
        addMarkers(filteredEvents);
    }

    // Initialize with all markers
    addMarkers(eventLocations);

    document.getElementById('filter-january').addEventListener('click', () => filterEvents(0));
    document.getElementById('filter-february').addEventListener('click', () => filterEvents(1));
    document.getElementById('filter-march').addEventListener('click', () => filterEvents(2));
    document.getElementById('filter-april').addEventListener('click', () => filterEvents(3));
    document.getElementById('filter-may').addEventListener('click', () => filterEvents(4));
    document.getElementById('filter-june').addEventListener('click', () => filterEvents(5));
    document.getElementById('filter-july').addEventListener('click', () => filterEvents(6));
    document.getElementById('filter-august').addEventListener('click', () => filterEvents(7));
    document.getElementById('filter-september').addEventListener('click', () => filterEvents(8));
    document.getElementById('filter-october').addEventListener('click', () => filterEvents(9));
    document.getElementById('filter-november').addEventListener('click', () => filterEvents(10));
    document.getElementById('filter-december').addEventListener('click', () => filterEvents(11));
    document.getElementById('filter-all').addEventListener('click', () => filterEvents('all'));
}

// Initialize the map after the page loads
window.onload = initEventsMap;

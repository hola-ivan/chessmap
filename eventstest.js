function initEventsMap() {
    const eventsMap = L.map('events-map').setView([40.73061, -73.935242], 2); // World view

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(eventsMap);

    const eventLocations = [
        { lat: 41.6168, lng: 41.6367, title: 'Batumi Municipality Cup', start: 'July 4, 2024', end: 'July 14, 2024' },
        { lat: 45.1, lng: 15.2, title: 'Grand Chess Tour: SuperUnited Croatia Rapid & Blitz 2024', start: 'July 8, 2024', end: 'July 16, 2024' },
        { lat: 51.4794, lng: 5.6578, title: 'Open NK Rapid', start: 'July 15, 2024', end: 'July 15, 2024' },
        { lat: 50.5876, lng: 8.6752, title: 'Gießener Open', start: 'July 19, 2024', end: 'July 21, 2024' },
        { lat: 48.1969, lng: 15.5213, title: 'Turnier auf der Schallaburg 2024', start: 'July 20, 2024', end: 'July 20, 2024' },
        { lat: 49.6561, lng: 8.6189, title: 'Offene Hessische Blitz- und Schnellmeisterschaft', start: 'July 31, 2024', end: 'September 1, 2024' },
        { lat: 51.3388, lng: 6.5853, title: 'Krefelder Sommer-Open', start: 'July 31, 2024', end: 'August 8, 2024' },
        { lat: 48.6259, lng: 7.4478, title: 'Open von Wasselonne', start: 'August 1, 2024', end: 'August 4, 2024' },
        { lat: 44.6767, lng: 8.4689, title: 'International Chess Open Acqui Terme', start: 'August 6, 2024', end: 'August 16, 2024' },
        { lat: 48.3665, lng: 10.8944, title: 'Augsburger Friedensfest Schach-Open', start: 'August 8, 2024', end: 'August 11, 2024' },
        { lat: 52.5200, lng: 13.4050, title: 'Lichtenberger Sommer', start: 'August 10, 2024', end: 'August 18, 2024' },
        { lat: 51.5136, lng: 7.4653, title: 'Sparkassen Chess Trophy 2024', start: 'August 10, 2024', end: 'August 18, 2024' },
        { lat: 38.6270, lng: -90.1994, title: 'Grand Chess Tour: Saint Louis Rapid & Blitz 2024', start: 'August 10, 2024', end: 'August 18, 2024' },
        { lat: 51.0344, lng: 6.9868, title: 'Bayer-Sommeropen', start: 'August 16, 2024', end: 'August 18, 2024' },
        { lat: 53.5511, lng: 9.9937, title: 'Hamburger Sommer-Open', start: 'August 17, 2024', end: 'August 21, 2024' },
        { lat: 38.6270, lng: -90.1994, title: 'Grand Chess Tour: Sinquefield Cup 2024', start: 'August 17, 2024', end: 'September 1, 2024' },
        { lat: 50.0833, lng: 8.2415, title: 'Wiesbadener Schlosspark-Open', start: 'August 22, 2024', end: 'August 25, 2024' },
        { lat: 51.2287, lng: 7.5600, title: 'Volme-Open', start: 'August 23, 2024', end: 'August 25, 2024' },
        { lat: 44.5284, lng: 14.4678, title: 'European Amateur Chess Championship', start: 'August 24, 2024', end: 'September 1, 2024' },
        { lat: 47.2692, lng: 11.4041, title: 'TIROL Open', start: 'August 24, 2024', end: 'August 31, 2024' },
        { lat: 52.5200, lng: 13.4050, title: 'Offene Berliner Frauen-Einzelmeisterschaft', start: 'September 5, 2024', end: 'December 5, 2024' },
        { lat: 48.3069, lng: 14.2858, title: 'Pluscity Grand Prix', start: 'September 5, 2024', end: 'December 5, 2024' },
        { lat: 39.8417, lng: 45.6703, title: 'Stepan Avagyan Memorial', start: 'September 10, 2024', end: 'September 10, 2024' },
        { lat: 47.1625, lng: 19.5033, title: '45th Chess Olympiad 2024', start: 'September 10, 2024', end: 'September 23, 2024' },
        { lat: 47.1625, lng: 19.5033, title: '45th FIDE Chess Olympiad 2024', start: 'September 10, 2024', end: 'September 24, 2024' },
        { lat: 47.1625, lng: 19.5033, title: '45th FIDE Women\'s Chess Olympiad 2024', start: 'September 10, 2024', end: 'September 24, 2024' },
        { lat: 47.5162, lng: 14.5501, title: 'Jubiläums-Rapidturnier', start: 'September 20, 2024', end: 'September 20, 2024' },
        { lat: 47.5162, lng: 14.5501, title: '12th Falkensteiner Herbst Open 2024', start: 'September 20, 2024', end: 'September 28, 2024' },
        { lat: 35.3, lng: 25.1, title: '12th Chania Chess Tournament', start: 'September 23, 2024', end: 'October 1, 2024' },
        { lat: 41.5667, lng: 23.2833, title: '2. Int. Schachwoche Sandanski', start: 'September 26, 2024', end: 'September 29, 2024' },
        { lat: 46.85, lng: 15.3056, title: 'Schilcherlandopen', start: 'October 2, 2024', end: 'October 6, 2024' },
        { lat: 45.9414, lng: -0.9633, title: '31. Rochefort Open', start: 'October 19, 2024', end: 'October 25, 2024' },
        { lat: 37.9367, lng: 23.7039, title: '6th International Chess Tournament “Isthmia 2024”', start: 'October 22, 2024', end: 'October 29, 2024' },
        { lat: 42.1362, lng: 43.0565, title: 'FIDE World Senior Chess Championship 2024', start: 'October 25, 2024', end: 'November 5, 2024' },
        { lat: 51.9194, lng: 19.1451, title: 'FIDE World Senior Team Chess Championship', start: 'November 3, 2024', end: 'November 11, 2024' },
        { lat: 0, lng: 0, title: 'GCT: 2024 Grand Chess Tour Finals', start: 'November 6, 2024', end: 'November 14, 2024' }

    ];

    let markers = [];
    const feedbackElement = document.getElementById('feedback');
    const buttons = document.querySelectorAll('#filter-buttons button');

    function addMarkers(filteredEvents) {
        markers.forEach(marker => eventsMap.removeLayer(marker));
        markers = [];

        filteredEvents.forEach(location => {
            const popupContent = `<b>${location.title}</b><br>${location.start} - ${location.end}`;
            const marker = L.marker([location.lat, location.lng])
                .addTo(eventsMap)
                .bindPopup(popupContent);
            markers.push(marker);
        });
    }

    function filterEvents(month) {
        feedbackElement.textContent = ''; // Clear previous feedback

        if (month === 'all') {
            addMarkers(eventLocations);
            return;
        }

        const filteredEvents = eventLocations.filter(location => {
            const eventMonth = new Date(location.start).getMonth();
            return eventMonth === month;
        });

        if (filteredEvents.length === 0) {
            feedbackElement.textContent = 'No events found for the selected month.';
        }

        addMarkers(filteredEvents);
    }

    function setActiveButton(activeButton) {
        buttons.forEach(button => button.classList.remove('active'));
        activeButton.classList.add('active');
    }

    // Initialize with all markers
    addMarkers(eventLocations);

    document.getElementById('filter-january').addEventListener('click', function() { setActiveButton(this); filterEvents(0); });
    document.getElementById('filter-february').addEventListener('click', function() { setActiveButton(this); filterEvents(1); });
    document.getElementById('filter-march').addEventListener('click', function() { setActiveButton(this); filterEvents(2); });
    document.getElementById('filter-april').addEventListener('click', function() { setActiveButton(this); filterEvents(3); });
    document.getElementById('filter-may').addEventListener('click', function() { setActiveButton(this); filterEvents(4); });
    document.getElementById('filter-june').addEventListener('click', function() { setActiveButton(this); filterEvents(5); });
    document.getElementById('filter-july').addEventListener('click', function() { setActiveButton(this); filterEvents(6); });
    document.getElementById('filter-august').addEventListener('click', function() { setActiveButton(this); filterEvents(7); });
    document.getElementById('filter-september').addEventListener('click', function() { setActiveButton(this); filterEvents(8); });
    document.getElementById('filter-october').addEventListener('click', function() { setActiveButton(this); filterEvents(9); });
    document.getElementById('filter-november').addEventListener('click', function() { setActiveButton(this); filterEvents(10); });
    document.getElementById('filter-december').addEventListener('click', function() { setActiveButton(this); filterEvents(11); });
    document.getElementById('filter-all').addEventListener('click', function() { setActiveButton(this); filterEvents('all'); });
}

// Initialize the map after the page loads
window.onload = initEventsMap;

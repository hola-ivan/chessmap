// Function to extract coordinates from the URL
function extractCoordinates(url) {
    const regex = /@(-?\d+\.\d+),(-?\d+\.\d+),/;
    const match = url.match(regex);
    if (match) {
        return {
            lat: parseFloat(match[1]),
            lng: parseFloat(match[2])
        };
    }
    return { lat: null, lng: null }; // Default if no coordinates found
}

// Function to fetch event data from the serverless function
async function fetchEventData() {
    const apiUrl = '/api/fetchEvents'; // Call the serverless function

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data.list.map(event => {
            const { lat, lng } = event['Event Location (Lat)'] && event['Event Location (Lng)']
                ? { lat: parseFloat(event['Event Location (Lat)']), lng: parseFloat(event['Event Location (Lng)']) }
                : extractCoordinates(event['Event Location (URL)']);

            return {
                lat: lat || null,
                lng: lng || null,
                title: event['Event Name'],
                start: new Date(event['Start Date']),
                end: new Date(event['End Date'])
            };
        });
    } catch (error) {
        console.error('Failed to fetch event data:', error);
        throw error;
    }
}

// Initialize the map and event handling
function initEventsMap() {
    const eventsMap = L.map('events-map').setView([40.73061, -73.935242], 2); // World view

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(eventsMap);

    let markers = [];
    const feedbackElement = document.getElementById('feedback');
    const buttons = document.querySelectorAll('#filter-buttons button');

    // Function to add markers to the map
    function addMarkers(filteredEvents) {
        markers.forEach(marker => eventsMap.removeLayer(marker));
        markers = [];

        filteredEvents.forEach(location => {
            if (location.lat && location.lng) {
                const popupContent = `<b>${location.title}</b><br>${location.start.toDateString()} - ${location.end.toDateString()}`;
                const marker = L.marker([location.lat, location.lng])
                    .addTo(eventsMap)
                    .bindPopup(popupContent);
                markers.push(marker);
            }
        });
    }

    // Function to filter events by month
    function filterEvents(month) {
        feedbackElement.textContent = ''; // Clear previous feedback

        const now = new Date();
        const currentYear = now.getFullYear();

        const filteredEvents = eventLocations.filter(location => {
            const startMonth = location.start.getMonth();
            const startYear = location.start.getFullYear();

            if (month === 'all') {
                return true;
            }

            return startMonth === month && startYear === currentYear;
        });

        if (filteredEvents.length === 0) {
            feedbackElement.textContent = 'No events found for the selected month.';
        }

        addMarkers(filteredEvents);
    }

    // Function to set the active button for month filtering
    function setActiveButton(activeButton) {
        buttons.forEach(button => button.classList.remove('active'));
        activeButton.classList.add('active');
    }

    // Fetch event data and initialize markers
    fetchEventData().then(data => {
        eventLocations = data; // Store event data globally
        // Initialize with all markers
        addMarkers(eventLocations);

        // Add event listeners for filtering
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
    }).catch(error => {
        console.error('Failed to fetch event data:', error);
        feedbackElement.textContent = 'Failed to load event data.';
    });
}

// Initialize the map after the page loads
window.onload = initEventsMap;
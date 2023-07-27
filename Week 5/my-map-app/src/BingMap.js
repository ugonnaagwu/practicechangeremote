/*global Microsoft*/

export class BingMap {
    constructor() {
        this.map = null;
        this.infobox = null;
        this.onPinClick = this.onPinClick.bind(this);
    }

    // Initialize the map
    init() {
        this.map = new Microsoft.Maps.Map(document.getElementById("myMap"));
        this.infoBox = new Microsoft.Maps.Infobox(this.map.getCenter(), {
            visible: false
        });
        this.infoBox.setMap(this.map);
    }

    // add a marker for each location in the data
    loadMarkers(data) {
        data.forEach(feature => {
            let latitude = feature.geometry.coordinates[1];
            let longitude = feature.geometry.coordinates[0];
            let pushpin = this.makePushpin(latitude, longitude);
            pushpin.metadata = {
                title: feature.properties.NAME,
                address: feature.properties.ADDRESS
            };
            Microsoft.Maps.Events.addHandler(pushpin, 'click', this.onPinClick);
            this.map.entities.push(pushpin);
        });
    }

    // event handler for when a marker is clicked
    onPinClick(e) {
        if (e.target.metadata) {
            this.infoBox.setOptions({
                location: e.target.getLocation(),
                title: e.target.metadata.title,
                description: e.target.metadata.description,
                visible: true
            });
        }
    }
    makePushpin(latitude, longitude) {
        let location = new Microsoft.Maps.Location(latitude, longitude);
        let pushpin = new Microsoft.Maps.Pushpin(location);
        return pushpin;
    }

    makeInfoBox(latitude, longitude, title, description) {
        let location = new Microsoft.Maps.Location(latitude, longitude);
        let infoBox = new Microsoft.Maps.Infobox(location, {
            title: title,
            description: description,
            visible: false
        });
        return infoBox;
    }
}
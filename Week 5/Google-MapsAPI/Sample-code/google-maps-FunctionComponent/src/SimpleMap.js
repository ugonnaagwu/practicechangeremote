import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  MarkerF,
  InfoWindow,
} from "@react-google-maps/api";
import "./MyDemo.css";

const containerStyle = {
  height: "70vh",
  width: "100%",
};

const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const iconBase =
  "https://developers.google.com/maps/documentation/javascript/examples/full/images/";

const icons = {
  parking: {
    icon: iconBase + "parking_lot_maps.png",
  },
  library: {
    icon: iconBase + "library_maps.png",
  },
  info: {
    icon: iconBase + "info-i_maps.png",
  },
  beach: {
    icon: iconBase + "beachflag.png",
  },
};

const mapLibraries = ["places"];

const SimpleMap = () => {
  const [center, setCenter] = useState({
    lat: 47.6062,
    lng: -122.3321,
  });
  const [defaultZoom, setDefaultZoom] = useState(12);
  const [infoFlag, setInfoFlag] = useState(false);
  const [myInfoWindow, setMyInfoWindow] = useState(null);
  const [places, setPlaces] = useState([
    {
      id: 1,
      position: {
        lat: 47.607,
        lng: -122.3418,
      },
      name: "Waterfront Park",
      description:
        "Waterfront Park is a public park on the Central Waterfront, Downtown, Seattle, Washington, USA. Designed by the Bumgardner Partnership and consultants, it was constructed on the site of the former Schwabacher Wharf.",
      imgSrc:
        "https://www.touropia.com/gfx/d/tourist-attractions-in-seattle/seattle_downtown_waterfront.jpg?v=1",
      address: "1401 Alaskan Way, Seattle, WA 98101",
      moreInfo: "https://en.wikipedia.org/wiki/Waterfront_Park_(Seattle)",
      type: "info",
    },
    {
      id: 2,
      position: {
        lat: 47.6205,
        lng: -122.3493,
      },
      name: "Space Needle",
      description:
        "Built for the 1962 Seattle World's Fair, the Space Needle has come to symbolize the Emerald City more than anything else. At 605 feet (184 meters) tall, it dominates Seattle's skyline. A revolving observation tower sits at 520 feet above the ground, offering ever-changing views of Seattle for miles around, including Puget Sound and the far-off Olympic Mountains. A revolving restaurant is on a lower level. Sunset is a good time to ride the elevator, which climbs at the speed of 10 miles per hour, to the top to see a twinkling Seattle below.",
      imgSrc:
        "https://cdn1.iconfinder.com/data/icons/landmarks-of-the-usa-2/128/USA_Seattle-Space_Needle-512.png",
      address: "400 Broad St, Seattle, WA 98109",
      moreInfo: "https://www.spaceneedle.com/plan-your-visit",
      type: "beach",
    },
  ]);

  const onLoad = (marker) => {
    console.log("marker: ", marker);
  };

  const infOnLoad = (infoBox) => {
    console.log("InfoBox: ", infoBox);
  };

  const updatePlace = (newLoc) => {
    setMyInfoWindow(newLoc);
    setInfoFlag(true);
  };

  const onClickChange = (locPosition) => {
    setCenter((prevCenter) => ({
      ...prevCenter,
      lat: locPosition.lat,
      lng: locPosition.lng,
    }));
    setDefaultZoom(16);
    console.log("my new center is " + center.lat + " " + center.lng);
  };

  let infoWindow = null;
  if (infoFlag) {
    infoWindow = (
      <InfoWindow
        onLoad={onLoad}
        onCloseClick={() => {
          setInfoFlag(false);
        }}
        position={myInfoWindow?.position}
      >
        <div style={{ backgroundColor: "pink", opacity: 1, padding: 3 }}>
          <p>
            <b>{myInfoWindow?.name}</b>
          </p>
          <p>
            <img src={myInfoWindow?.imgSrc} alt={myInfoWindow?.name} />
          </p>
          <p>
            <a href={myInfoWindow?.moreInfo}>Learn More</a>
          </p>
          <p>{myInfoWindow?.address}</p>
        </div>
      </InfoWindow>
    );
  }

  return (
    <div className="demo-app">
      <div className="demo-app-sidebar">
        <h2>Google Maps API Demo Instructions</h2>
        <ul>
          <li>Please click on the location name to see on the map</li>
        </ul>
        <ol>
          {places.map((loc) => (
            <li key={loc.id} onClick={() => onClickChange(loc.position)}>
              <h2>
                <span>
                  <b>{loc.name}</b>
                </span>
                <br />{" "}
              </h2>
              <p>
                <img src={loc.imgSrc} alt={loc.name} />
              </p>
              <p>{loc.address}</p>
            </li>
          ))}
        </ol>
      </div>
      <div className="demo-app-main">
        <div className="containerStyle">
          <LoadScript
            googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY"
            language="en"
            libraries={mapLibraries}
          >
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={defaultZoom}
              onClick={onClickChange}
            >
              {places.map((myPlace) => (
                <MarkerF
                  label={labels[myPlace.id - 1]}
                  key={myPlace.id}
                  onLoad={onLoad}
                  position={myPlace.position}
                  onClick={() => {
                    updatePlace(myPlace);
                  }}
                />
              ))}
              {infoWindow}
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </div>
  );
};

export default SimpleMap;

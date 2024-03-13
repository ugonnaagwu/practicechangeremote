# Calendar and Maps APIs

Connecting to a Maps API will be an essential skill when working on apps which need Map data to enhance the user experience. NTs will investigate Maps APIs and Calender Component basics, install React-Google-Maps API and FullCalender component libraries, and consider implementing in their prototype.

## Learning objectives

* TNTs will understand how to create ana Google Maps API key
* TNTs will understand how to evaluate and choose the correct API from what is available on the marker
* TNTs will understand how to use Google Javascript API and others
* TNTs will understand how to implement different functionalities to interact with the map

## Time required and pace

* 30 minutes - explain: Google MAP API Setup
* 15 minutes - explain: how to evaluate and choose the correct API for your project
* 35 minutes - explore: create and use react google maps API in a project
* 10 minutes - create and use FullCalender in a project
* 10 minutes - review, and investigate

## References

* Google Maps JavaScript API 
  * [Guide](https://developers.google.com/maps/documentation/javascript/overview)
  * [Samples](https://developers.google.com/maps/documentation/javascript/examples)
* @react-google-maps/api
  * [Documentation](https://web.archive.org/web/20230701010714mp_/https://react-google-maps-api-docs.netlify.app/)
  * [Installation](https://www.npmjs.com/package/@react-google-maps/api)
  * [GitHub](https://github.com/JustFly1984/react-google-maps-api)
* google-map-react
  * [Documentation](https://github.com/google-map-react/google-map-react/blob/HEAD/DOC.md)
  * [Installation](https://www.npmjs.com/package/google-map-react)
  * [GitHub](https://github.com/google-map-react/google-map-react)
* FullCalendar library
  * [Documentation](https://fullcalendar.io/docs/typescript)
  * [Installation](https://www.npmjs.com/package/fullcalendar)
  * [GitHub](https://github.com/fullcalendar/fullcalendar-react)

**RABBIT HOLE WARNING**: Can't find what you need check this out

* Awesome React [Component Library list](https://github.com/enaqx/awesome-react#react-component-libraries)

## Google Maps API setup

We are going to use Google Maps APIs during the session. Google Maps Platform is a set of APIs and SDKs that are managed from the Google Cloud console (also referred to as the Cloud Console). First, we need to setup the API.

1. Follow the Get Started on the page [**here**](https://developers.google.com/maps/gmp-get-started#quickstart) to complete the steps
  * [ ] Create a project
  * [ ] Create a billing account
  * [ ] Enable one or more APIs or SDKs
  * [ ] Get, add, and restrict an API key
  
2. Check the setup screenshots from [**here**](./Google-maps-API-setup.md).
   You can check if your Google Cloud console setup matches the screenshots or not. If you still have any questions please share with us during the session for discussion.

## Evaluate and choose the correct API from what is available on the marker

If you are considering Map APIs in your final app prototype, please share with us the answers of the following two questions on the session chat area for open discussion

* **What are the different Map APIs you researched and tried?**
* **How do you choose the API that you will start to use?**

There are a large number of React Maps API libraries to choose from, each with a different history, focus, strengths and limitations. Some things to look for include:

* **Built for React** - some JavaScript libraries can be used with React, but are not built for React. This can lead to integration issues and challenges with installation.
* **TypeScript Support** - look for libraries that offer fully-supported TypeScript definitions, examples and demo projects to avoid surprises later on.
* **Open Source Licensing** - Not all libraries are open source or free to use. Look for MIT Licensing for the most flexibility. Note that some free libraries offer paid support or charge for custom themes.
* **Clearly Supported** - Pay attention to when the library's GitHub repo was last updated; look for clear documentation, well-thought out examples, and sample projects.
  
***As a product owner or a developer you need to be ready to talk about why in a meaningful way, how it meets a need and why this product over other similar products.***

### Here are some examples for different Maps APIs libraries out there

* Google Maps JavaScript API 
  * [Guide](https://developers.google.com/maps/documentation/javascript/overview)
  * [Samples](https://developers.google.com/maps/documentation/javascript/examples)
* @react-google-maps/api
  * [Documentation](https://web.archive.org/web/20230701010714mp_/https://react-google-maps-api-docs.netlify.app/)
  * [Installation](https://www.npmjs.com/package/@react-google-maps/api)
  * [GitHub](https://github.com/JustFly1984/react-google-maps-api)
* google-map-react
  * [Documentation](https://github.com/google-map-react/google-map-react/blob/HEAD/DOC.md)
  * [Installation](https://www.npmjs.com/package/google-map-react)
  * [GitHub](https://github.com/google-map-react/google-map-react)

We are going to dive deep with one API library in particular for the session demonstration example.
We are going to use [**@react-google-maps/api**]()

### @react-google-maps/api: Installation Process and Gotchas

#### NPM installation

Look for the "Getting Started" or "Installation" section on the [library website](https://github.com/JustFly1984/react-google-maps-api/tree/master/packages/react-google-maps-api) to find the npm library name. You can also [search npm packages directly](https://www.npmjs.com/) for "React" components by name.

***Install @react-google-maps/api***

```JSX
npm install --save @react-google-maps/api
```

Or

```JSX
yarn add @react-google-maps/api
```

### Code Walkthrough - @react-google-maps/api

Our code demo aim is to implement a small web app to list some of the recommended places to visit in Seattle and show where there are located on the map.

![Map API Demo](./images/GoogleMapsApIDemo.png)

### Code snippets for implementation

Check code details ***SimpleMap.js*** file

1. Create a new functional component
2. Add the necessary import from the library

```JSX
import { useJsApiLoader, GoogleMap } from '@react-google-maps/api';
```

3. To render a google map in your custom component, you need to
    * load API script and render GoogleMap component
    * The two basic components required to load a simple map are:
      * [ ] useJsApiLoader - function that loads the Google Map API script
      * [ ] GoogleMap - The map component inside which all other components render

``` JSX
const SimpleMap = () => {
  // Load the Google Maps API JS script into the App.
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY",
    language: "en",
    libraries: ["include any special libraries that you need access to such as 'places'"],
  });

  const [center, setCenter] = useState({
    lat: 47.6062,
    lng: -122.3321,
  });
  const [defaultZoom, setDefaultZoom] = useState(12);

  // If the Google Map API wasn't loaded properly, we do not want to try and render the <GoogleMap> component.
  if (!isLoaded) {
    return (<p>Map not was not loaded correclty.</p>);
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={defaultZoom}
    >
      {/* Child components, such as Marker, InfoWindow, etc. */ }
    </GoogleMap>
  );
};
```

4. Add a marker on the map center location. Checkout what are other options that you can add to a marker. 

    **Note**: `<Marker/>` and `<MarkerF/>` are the same component, the only difference is that **Marker** is a *class* component implementation and **MarkerF** is a *functional* component implementation.

``` JSX
// <GoogleMap>
  <MarkerF
    position={center}
  />
// </GoogleMap>
```

5. Add an `<InfoWindow>` for the marker

``` JSX
// <GoogleMap>
// <MarkerF />
  <InfoWindow
    position={center}
  >
    <div style={{ backgroundColor: 'pink', opacity: 0.75, padding: 12 }}>
        <div style={{ fontSize: 16 }}> 
        <h1>{center.lat + ' ' + center.lng}</h1>
        </div>
    </div>
  </InfoWindow>
// </GoogleMap>
```

6. Update the import

```JSX
import { useJsApiLoader, GoogleMap, MarkerF, InfoWindow} from '@react-google-maps/api';
```

7. Add multiple markers and info windows.
   * Create an info window instant
      * [ ] Add state variables to save a list of places and to save the current selected marked place.
      * [ ] Initialize the state variables using [useState](https://react.dev/reference/react/useState) hook from React.

``` JSX
  const [selectedPlace, setSelectedPlace] = useState(null);
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
    ...
  ]);
  ```

   * [ ] Create a function that optionally returns a new InfoWindow component related to a place. This would be called when rendering the final result.

  ```JSX
  ...
  const renderInfoWindow = () => {
    let infoWindow = null;
    if (selectedPlace) {
      infoWindow = (
        <InfoWindow
          position={selectedPlace?.position}  // Puts InfoWindow position on the selected place's location {lng and lat}
          onCloseClick={() => setSelectedPlace(null)}   // Closing the InfoWindow, would be the same as de-selecting the current selected place
        >
          {/* Show selected Data on the info window */}
          <div style={{ backgroundColor: "pink", opacity: 1, padding: 3 }}>
            <p><b>{selectedPlace?.name}</b></p>
            <p><img src={selectedPlace?.imgSrc} alt={selectedPlace?.name} /></p>
            <p><a href={selectedPlace?.moreInfo}>Learn More</a></p>
            <p>{selectedPlace?.address}</p>
          </div>
        </InfoWindow>
      );
    }
    return infoWindow;  // Only show an InfoWindow if there is a selected place, otherwise show nothing.
  };
  ...
  ```

  * [ ] Use [map](https://www.w3schools.com/jsref/jsref_map.asp) to create a marker for each place from your places object.
  * [ ] Call the *renderInfoWindow* function after the marker tag.

  ```JSX
  // <GoogleMap>
  {/* loop for all my places and set a marker component */}
    {places.map((myPlace) => (
      <MarkerF
        key={myPlace.id}
        position={myPlace.position}
        onClick={() => setSelectedPlace(myPlace)}
        />
    ))}
    {/* Show the selected place's info window */}
    {renderInfoWindow()}
  // </GoogleMap>
  ```

8. Change the GoogleMap state with onClick action

``` JSX
...
  const onClickChange = (e) => {
    setCenter((prevCenter) => ({
      ...prevCenter,              // keep all other key-value pairs
      lat: 47.608013,             // update the value of specific key
      lng: -122.335167,
    }));
    console.log("my new center is " + center.lat + " " + center.lng);
  };
...
```

For our code demo we did:

  ```JSX
  ...
  // when onClick name location update the state center value and zoom in
  const onClickChange = (locPosition) => {
    setCenter((prevCenter) => ({
      ...prevCenter,            // keep all other key-value pairs
      lat: locPosition.lat,     // update the value of specific key
      lng: locPosition.lng,
    }));
    setDefaultZoom(16);
    console.log("my new center is " + center.lat + " " + center.lng);
  };
  ...
  ```

### Code Walkthrough- FullCalendar API

Check `Calendar.js` and `event-utils.js` for code details.

![FullCalendar](./images/FullCalendar-Demo.png)

## Calendar and Maps API Code Demo

[Sample code for demo](./Sample-code/google-maps-and-fullcalendar-javascript)

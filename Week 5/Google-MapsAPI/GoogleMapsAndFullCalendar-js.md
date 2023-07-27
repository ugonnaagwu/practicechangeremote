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

* react-google-maps-api 
  * [documentation](https://react-google-maps-api-docs.netlify.app/#section-introduction)
  * [installation](https://www.npmjs.com/package/@react-google-maps/api)
* [google-map-react npm](https://www.npmjs.com/package/google-map-react) and [documentation](https://github.com/google-map-react/google-map-react/blob/HEAD/DOC.md)
* Google Maps JavaScript API [Samples](https://developers.google.com/maps/documentation/javascript/examples)
  * Library examples [Demos](https://react-google-maps-api-gatsby-demo.netlify.app/)
  * Google Maps JavaScript API [Guide](https://developers.google.com/maps/documentation/javascript/overview)
* [FullCalendar library](https://fullcalendar.io)
  * [Documentations](https://fullcalendar.io/docs/typescript)
  * [Yarn install](https://www.npmjs.com/package/fullcalendar)
  * [Library GitHub](https://github.com/fullcalendar/fullcalendar-react)

**RABBIT HOLE WARNING**: Can't find what you need check this out

* Awesome React [Component Library list](https://github.com/enaqx/awesome-react#react-component-libraries)

## Google Maps API setup

We are going to use Google Maps APIs during the session. Google Maps Platform is a set of APIs and SDKs that are managed from the Google Cloud console (also referred to as the Cloud Console). First, we need to setup the API.

1. Follow the Get Started on the page [**here**](https://developers.google.com/maps/gmp-get-started#quickstart) to complete the steps
  * [ ] Create a billing account
  * [ ] Create a project
  * [ ] Enable one or more APIs or SDKs
  * [ ] Get, add, and restrict an API key
  
2. Check the setup screenshots from [**here**](./Google-maps-API-setup.md).
   You can check if your Google Cloud console setup matches my screenshots or not. If you still have any questions please share with us during the session for discussion.

## Evaluate and choose the correct API from what is available on the marker

If you are considering Map APIs in your final app prototype, please share with us the answers of the following two questions on the session chat area for open discussion

* **What are the different Map APIs you researched and tried?**
* **How do you choose the API that you will start to use?**

There are a large number of React Maps API libraries to choose from, each with a different history, focus, strengths and limitations. Some things to look for include:

* **Built for React** - some JavaScript libraries can be used with React, but are not built for React. This can lead to integration issues and challenges with installation
* **TypeScript Support** - look for libraries that offer fully-supported TypeScript definitions, examples and demo projects to avoid surprises later on.
* **Open Source Licensing** - Not all libraries are open source or free to use. Look for MIT Licensing for the most flexibility. Note that some free libraries offer paid support or charge for custom themes.
* **Clearly Supported** - Pay attention to when the library's GitHub repo was last updated; look for clear documentation, well-thought out examples, and sample projects.
  
***As a product owner or a developer you need to be ready to talk about why in a meaningful way, how it meets a need and why this product over other similar products.***

### Here are some examples for different Maps APIs libraries out there

* Google Maps JavaScript API
  * [Guide](https://developers.google.com/maps/documentation/javascript/overview)
  * [Samples](https://developers.google.com/maps/documentation/javascript/examples)
  * [Demos](https://react-google-maps-api-gatsby-demo.netlify.app/)
* react-google-maps-api
  * react-google-maps-api [documentation](https://tomchentw.github.io/react-google-maps/)
  * react-google-maps-npm [installation](https://tomchentw.github.io/react-google-maps/#installation)
* google-map-react

  * [google-map-react npm](https://www.npmjs.com/package/google-map-react)
  * [documentation](https://github.com/google-map-react/google-map-react/blob/HEAD/DOC.md)

We are going to dive deep with one API library in particular for the session demonstration example.
We are going to use [**react-google-maps-api**]()

### react-google-maps-api: Installation Process and Gotchas

#### NPM installation

Look for the "Getting Started" or "Installation" section on the [library website](https://tomchentw.github.io/react-google-maps/#introduction) to find the npm library name. You can also [search npm packages directly](https://www.npmjs.com/) for "React" components by name.

***Install @react-google-maps/api***

```JSX
npm install --save @react-google-maps/api
```

Or

```JSX
yarn add @react-google-maps/api
```

### Code Walkthrough - react-google-maps/api

Our code demo aim is to implement a small web app to list some of the recommended places to visit in Seattle and show where there are located on the map.

![Map API Demo](./images/GoogleMapsApIDemo.png)

### Code snippets for implementation

Check code details ***SimpleMap.js*** file

1. Create a class component
2. To render a google map in your component you need to
    * LoadScript and GoogleMap
    * The two basic components required to load a simple map are:
      * [ ]LoadScript - Loads the Google Map API script
      * [ ]GoogleMap - The map component inside which all other components render

``` JSX

class SimpleMap extends Component{
  constructor(props, state){
  super(props, state);
  this.state = {
    center:{
      lat: 47.6062,
      lng: -122.3321
  },
  defaultZoom:12,
  };
  };

  render() {
      return (
      <LoadScript
        googleMapsApiKey="Add your API key here"
        language="en"
        libraries={["include any special libraries that you need access to such as places"]}
      >
      <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={this.state.center}
      zoom={this.state.defaultZoom}
      onClick={this.onClickChange}
    >
{/*{ /* Child components, such as markers, info windows, etc. */ }
    </GoogleMap>
  </LoadScript>
      )
    }
```

3. Add the necessary import from the library

```JSX
import { GoogleMap, LoadScript} from '@react-google-maps/api';
```


4. Add a marker on the map center location
Checkout what are other options that you can add to  a marker

``` JSX
<Marker 
    onLoad={this.onLoad}
    position={this.state.center}
/>
```

5. Add infoWindow for the marker

``` JSX
 <InfoWindow
    position={this.state.center}
    >
    <div style={{ backgroundColor: 'pink', opacity: 0.75, padding: 12 }}>
        <div style={{ fontSize: 16 }}> 
        <h1>{this.state.center.lat + ' ' + this.state.center.lng}</h1>
        </div>
   </div>
</InfoWindow>

```

6. update the import

```JSX
import { GoogleMap, LoadScript, Marker, InfoWindow} from '@react-google-maps/api';
```

7. Add multiple marker
   * Create a info window instant
      * [ ] Add an InfoFlag, places and myInfoWindow to the class state
      * [ ] Initialize in the constructor

    ``` JSX
      infoFlag:false
    // App Places Data to render on the map
      places:[
        {
          id: 1, 
          position: { 
            lat: 47.6070, 
            lng: -122.3418 
          }, 
          name: "Waterfront Park", 
          description: "Waterfront Park is a public park on the Central Waterfront, Downtown, Seattle, Washington, USA. Designed by the Bumgardner Partnership and consultants, it was constructed on the site of the former Schwabacher Wharf.",
          imgSrc:"https://www.touropia.com/gfx/d/tourist-attractions-in-seattle/seattle_downtown_waterfront.jpg?v=1", 
          address:"1401 Alaskan Way, Seattle, WA 98101",
          moreInfo:"https://en.wikipedia.org/wiki/Waterfront_Park_(Seattle)",
          type:'info'
        },
        ...
      ]
      ```

   * [ ]Create an infoWindow object before the return

```JSX
    render() {
    let infoWindow;
        if (this.state.infoFlag) {
          infoWindow =
            <InfoWindow
              onLoad={this.onLoad}
              onCloseClick={() => { this.setState({ infoFlag: false }) }} //Keeps infoWindow closed before Click
              position={this.state.myInfoWindow.position} //Puts infoWindow on location position {lng and lat }
            >
              {/* Show selected Data on the info window */}
              <div style={{backgroundColor: 'pink', opacity: 1, padding:3 }}>
              <p><b>{this.state.myInfoWindow?.name}</b></p>
              <p> { <p><img src={this.state.myInfoWindow.imgSrc}/></p>}</p>
                <p><a href={this.state.myInfoWindow.imgSrc}>Learn More</a></p>
                <p>{this.state.myInfoWindow.address}</p>
              </div>
            </InfoWindow>;
        } else {
          infoWindow = null;
        }
    }
```

  * [ ] Use map to create a marker for each place from your places object
  * [ ] Call the info window instant after the marker tag

  ```JSX
  {/* loop for all my places and set a marker component */}
  {this.state.places.map((myPlace) => (
  // console.log(icons[myPlace.type]);
  <Marker
    label={labels[myPlace.id - 1]}
    
    // icon={icons[myPlace.type].icon}
     key={myPlace.id}
     onLoad={this.onLoad}
     position={myPlace.position}
     onClick={() => {this.updatePlace(myPlace);}}
    />
  ))}
  {/* Show my info window instant */}
  {infoWindow}
  ```

  ``` JSX
  updatePlace = (newloc) => {
    this.setState({ myInfoWindow: newloc, infoFlag: true }); // update the InfoWindow to the value of the current marker
  }
  ```

8. change the map state with onClick action

``` JSX
onClickChange= (e) => {
    this.setState(state => ({
      center: {                   // object that we want to update
          ...state.center,    // keep all other key-value pairs
          lat: 47.608013,
          lng: -122.335167       // update the value of specific key
      },
      zoom:state.zoom
  }))
  console.log("my new center is"+ this.state.center.lat +" "+ this.state.center.lng)
}
```

For our code demo we did:

```JSX
// when onClick name location update the state center value and zoom in
 onClickChange= (locPosition) => {
  this.setState(state => ({
        center: {                   // object that we want to update
          ...state.center,       // keep all other key-value pairs
          lat: locPosition.lat,
          lng: locPosition.lng      // update the value of specific key
        },
        defaultZoom:16,
        infoFlag:state.infoFlag,
        places:state.places
        
    }))
    console.log("my new center is"+ this.state.center.lat +" "+ this.state.center.lng)
  };
  ```

### Code Walkthrough- FullCalendar API

Check Calendar.js and event-utils.js for code details

![FullCalendar](./images/FullCalendar-Demo.png)

## Calendar and Maps API Code Demo

[Sample code for demo](./Sample-code/google-maps-and-fullCalender-javaScript)

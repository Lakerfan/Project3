import React, {Component} from 'react';
import Results from "./Results";
import HomeForms from "./HomeForms";
import Marker from "./Marker";
import GoogleMapReact from 'google-map-react';
import Table from "./Table";
import HomeData from "../constants/homeData"

const BASE_URL = "http://localhost:8080/jobs";

const GOOGLE_LAT_LONG_LOOKUP = "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyC_XDDgdCA0ExFOpyC45djsNLP8biagwGM&address="

class Home extends Component{

  constructor(props) {
    super(props);
    this.state = {
      isShowingMap: false,
      center: {
        lat: 59.95,
        lng: 30.33
      },
      showSecondMap: false,
      secondMapCenter: {},
      secondMapZoom: 50,
      zoom: 11,
      jobMarkers: [],
      houseMarkers: [],
      jobs: []
    };
  }

  changeCenter = () => {}

  changeZoom = (latitude, longitude) => {
    const secondMapCenter = { latitude, longitude };
    this.setState(prevState => ({ showSecondMap: !prevState.showSecondMap, secondMapCenter, isShowingMap: !prevState.isShowingMap }));
  }

  testClick = (jobref, cityref) => {
    const job = jobref.current.value;
    const location = cityref.current.value;
    //change state of map (the center point) to render to page:
    if (location) {
      this.setState({isShowingMap: false});
      const google_look_up_url = GOOGLE_LAT_LONG_LOOKUP + location;
      // include housing data as markers on the map:

      
      let markersHousingArr = [];
      HomeData.map(home => {
        const markerObj = {};
              markerObj.lat = home.latitude;
              markerObj.lng = home.longitude;
              markerObj.img = home.image;
        markersHousingArr.push(markerObj)
      })

      fetch(google_look_up_url)
      .then(res => res.json())
      .then(data => this.setState({ 
        center: data.results[0].geometry.location,
        isShowingMap: true,
        houseMarkers: markersHousingArr
      })).catch((err) => console.log('ERROR 1', err));
    }
    
    // change state of map (include markers) as well as jobs to render new map and table
    if (job && location) {
      this.setState({isShowingMap: false});
      const markerArrTemp = [];
      fetch(`${BASE_URL}?job=${job}&location=${location}`)
        .then(res => res.json())
        .then(data => {
          data.map((job, index) => {
            let lat = job.latitude;
            let long = job.longitude;
            //editing the adzuna data to make it look better on the map (avoid the duplicates):
            if (index - 1 >= 0) {
              const prevLocationLat = data[index - 1].latitude;
              const prevLocationLong = data[index - 1].longitude;
              if (prevLocationLat === job.latitude && prevLocationLong === job.longitude) {
                lat = lat + (index * 0.01 * Math.floor(Math.random() * index));
                long = long + (index * 0.01);
              }
            }
            const markerObj = {};
            markerObj.text = job.company.display_name;
            markerObj.lat = lat;
            markerObj.lng = long;
            markerArrTemp.push(markerObj)
          });
          this.setState({
            jobMarkers: markerArrTemp,
            jobs: data
          });
        }).catch(err => console.log('ERROR 2', err))
      
    }
  };
 mapStyles = {
    width: '100%',
    height: '100%',
  };
 render () {
  const jobref = React.createRef();
  const cityref = React.createRef();
  const jobMarkers = this.state.jobMarkers.map(
    (marker, index) => <Marker key={index + "job"}
                               {...marker}
                               type="job"
                               handleZoom={() => this.changeZoom(marker.lat, marker.lng)}
                        />
  );
  const houseMarkers = this.state.houseMarkers.map(
    (marker, index) => <Marker key={index + "house"}
                               type="house"
                               {...marker}
                               handleZoom={() => this.changeZoom(marker.lat, marker.lng)}
                        />
  );
  const markers = [...jobMarkers, ...houseMarkers];
  return (
    <div>
      <div className="App" style={{ marginTop: "100px" }}>
      </div>
      
      <div className="container">
        <div className="row" id="inputs">
          <div className="col-sm-12 col-md-5 colmoveLeft">
            <p className="whatWhere text-center">JOB TITLE:</p>
            <p className="inputTitles text-center">
              job title, keywords, or company
            </p>
            <div className="input-container">
              <input
                type="text"
                className="form-control centeredCol"
                autoComplete="off"
                name="what"
                id="what"
                ref={jobref}
              />
              <img src="img/SearchGlass.png" className="searchIcon" />
            </div> 
            
          </div>
          <div className="col-sm-12 col-md-5 colmoveRight">
            <p className="whatWhere text-center">where:</p>
            <p className="inputTitles text-center">
              city, state, country or zip code
            </p>
            <div className="input-container">
              <input
                type="text"
                className="form-control centeredCol"
                id="where"
                ref={cityref}
                autoComplete="off"
              />
              <img src="img/GoogleMapsPin.jpg" className="googleIcon" />
            </div>
          </div>
          <div className="col-sm-12 col-md-2 advanceContainer">
            <button id="advance" onClick={() => this.testClick(jobref, cityref)}>
              SEARCH
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div id="map"></div>
      </div>
      <div className="searchMap">
        {this.state.isShowingMap && <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyC_XDDgdCA0ExFOpyC45djsNLP8biagwGM'}}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
          options={{ 
            styles : [
              {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
              {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
              {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
              {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
              },
              {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
              },
              {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{color: '#263c3f'}]
              },
              {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#6b9a76'}]
              },
              {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#38414e'}]
              },
              {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{color: '#212a37'}]
              },
              {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{color: '#9ca5b3'}]
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#746855'}]
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#1f2835'}]
              },
              {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{color: '#f3d19c'}]
              },
              {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{color: '#2f3948'}]
              },
              {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
              },
              {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{color: '#17263c'}]
              },
              {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#515c6d'}]
              },
              {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#17263c'}]
              }
            ]
          }}
        >
          {markers}
        </GoogleMapReact>}
        {this.state.showSecondMap && <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyC_XDDgdCA0ExFOpyC45djsNLP8biagwGM'}}
          defaultCenter={this.state.secondMapCenter}
          defaultZoom={this.state.secondMapZoom}
        >
        </GoogleMapReact>}

        {this.state.jobs && this.state.jobs.length > 0 && 
          <Table jobs={this.state.jobs} />
        }
      </div>
    </div>
  );
};
}

export default Home;

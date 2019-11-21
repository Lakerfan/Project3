import React,{useState} from 'react';
import HouseMarker from '../Images/homeMarker.png'


function Marker(props) {
  const [infoWindow, setInfoWindow] = useState(false);

  return (
    <>
    <img
        src={props.type === 'job' ? '/img/GoogleMapsPin.jpg' : HouseMarker}
        style={{ height: '20px', width: '20px' }}
        onClick={props.handleZoom}
        onMouseOver={() => setInfoWindow(true)}
    />

    {infoWindow && (
      <div
      style={{
        width: 100,
        height: 100
      }}
    >Info window</div>
    )}
  </>
  );
}

export default Marker;

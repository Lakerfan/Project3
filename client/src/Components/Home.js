import React from 'react';
import Results from './Results';
import HomeForms from './HomeForms';

const Home = () =>{
    const jobref=React.createRef()
    const cityref=React.createRef()


    let testClick=() =>{

    console.log(jobref.current.value)
    }
    return (
        <body>
        <div className="App">
            <h1>
            HOME
            </h1>
        </div>


  <img src="assets/css/GlobalMap.png" class="backgroundImage" />
  <div class="container">
    <div class="row" id="inputs">
      <div class="col-sm-12 col-md-5 colmoveLeft">
        <p class="whatWhere text-center">JOB TITLE:</p>
        <p class="inputTitles text-center">job title, keywords, or company</p>
        <input type="text" class="form-control centeredCol" autocomplete="off" name="what" id="what" ref={jobref}/>
        <img src="img/SearchGlass.png" class="searchIcon" />
      </div>
      <div class="col-sm-12 col-md-5 colmoveRight">
        <p class="whatWhere text-center">where</p>
        <p class="inputTitles text-center">city, state, country or zip code</p>
        <input type="text" class="form-control centeredCol" id="where" ref={cityref} autocomplete="off" />
        <img
          src="img/GoogleMapsPin.jpg"
          class="googleIcon" />
      </div>
      <div class="col-sm-12 col-md-2"><button id="advance" onClick={testClick}>SEARCH</button></div>



    </div>
  </div>
  <div class="container">
    <div id="map"></div>
  </div>


  <script src="https://code.jquery.com/jquery-3.4.1.min.js"
    integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
    integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous">
  </script>
  <script type="text/javascript" src="https://cdn.datatables.net/v/dt/dt-1.10.18/datatables.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous">
  </script>
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC_XDDgdCA0ExFOpyC45djsNLP8biagwGM"></script>
  <script src="https://cdn.jsdelivr.net/gmap3/7.2.0/gmap3.min.js"></script>
  <script src="assets/js/API.js"></script>
  </body>
    )
}



export default Home;
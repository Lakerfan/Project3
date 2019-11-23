import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 
import { Navbar, Nav } from "react-bootstrap";


// import logo from './logo.svg';
import ContactUs from './Components/ContactUs'; 
import About from './Components/AboutUs'
import Profile from './Components/Profile'
import './App.css';
import ProfileImg from './Images/ProfileImage.jpg'
import OtherHome from './Components/OtherHome'
import Results from './Components/Results'
//import Home from './Components/Home'

//Let's pretend we have a user logged in.  Here is the info (already pulled from the db) for this pretend user:
const user = {
  userName: "Amber W.",
  profileImg: ProfileImg,
  favorites: [],
  jobSearches: [],
  lifestyle: []
}

function App() {
  return (
  <Router>
    <Navbar className="NavBarColor" expand="lg" fixed="top">
      <Navbar.Brand>
        <Link to="/">Got it Made</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbarItems">
          <Nav.Item>
            <Link to="/">HOME</Link>
          </Nav.Item>
          {/* <Link to="/">Results</Link> */}
          <Nav.Item>
            <Link to="/about">ABOUT US</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/login">LOG IN</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/signup">SIGN UP</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/contactus">CONTACT US</Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
  </Navbar>

       {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contactus">
        <ContactUs />
      </Route>
      <Route path="/profile">
        <Profile userInfo={user} greeting="Hello There!" />
      </Route>          
      <Route path="/">
        <OtherHome />
      </Route>

      {/* <Route path="/results">
        <Results />
      </Route> */}
    </Switch>
   </Router>
   );
}

export default App;

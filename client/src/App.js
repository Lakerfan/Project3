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
import Results from './Components/Results'


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
          <Nav.Link>
            <Link to="/">HOME</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/about">ABOUT US</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/login">LOG IN</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/signup">SIGN UP</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/contactus">CONTACT US</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
<div>

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
          <Route path="/results">
            <Results />
          </Route>
         </Switch>
      </div> 


   </Router>
   


  );
}

export default App;

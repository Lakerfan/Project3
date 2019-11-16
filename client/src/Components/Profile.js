import React from 'react';
import { Image, Container, Row, Col } from "react-bootstrap";

function Profile(props) {
    console.log("The input is props, it is:", props);
    console.log("The userInfo is one of two inputs, it is:", props.userInfo);
    console.log("The userName is one of the UserInfo items, it is:", props.userInfo.userName);
    const userName = props.userInfo.userName;
    const userImg = props.userInfo.profileImg;
  return (
    <div className="App">
     <h1 className="yourProfile">YOUR PROFILE </h1> 
     <h4 className="welcomeBack"> WELCOME BACK, {userName}! </h4>
     <h5>{props.greeting}</h5>
     {/* <Container> */}
         <Row>
             <Col md={{span: 4, offset:1}} className="profileImgContainer">
                <Image src={userImg} roundedCircle className="profileImg" />       
             </Col>
             <Col md={6}>
                <div>Profile Details</div>
             </Col>
         </Row>
     {/* </Container> */}
    </div>
  );
}

export default Profile;

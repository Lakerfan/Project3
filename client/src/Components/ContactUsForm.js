import React,{useState} from 'react';
import { Form, Button, Col, Row } from "react-bootstrap";


function ContactUsForm() {
    const [validated, setValidated] = useState(false);
  
    const handleSubmit = event => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
  
    return (
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} md={{ span: 6, offset: 3 }} controlId="validationCustom01">
            <Form.Label className="formLabel">First Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First Name"
              className="formInput"
            />
            <Form.Control.Feedback>Looks great, babe!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md={{ span: 6, offset: 3 }} controlId="validationCustom02">
            <Form.Label className="formLabel">Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last Name"
            />
            <Form.Control.Feedback>Awesome Last Name!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md={{ span: 6, offset: 3 }} controlId="validationCustomEmail">
            <Form.Label className="formLabel">Email</Form.Label>
            <Form.Control
                type="email"
                placeholder="Email:"
                required
            />
            <Form.Control.Feedback>This looks to be a REAL email, great!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
                 Please Provide a REAL Email.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md={{ span: 6, offset: 3 }} controlId="validationCustom03">
            <Form.Label className="formLabel">Subject</Form.Label>
            <Form.Control type="text" placeholder="Email Subject:" required />
            <Form.Control.Feedback> Alright!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
                     Provide an email subject.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md={{ span: 6, offset: 3 }} controlId="validationCustom04">
            <Form.Label className="formLabel">Message</Form.Label>
            <Form.Control as="textarea" placeholder="Drop us a message" rows="8" required />
            <Form.Control.Feedback type="invalid">
                  Um, we need to hear from you.
            </Form.Control.Feedback>
            <Form.Control.Feedback> Alright!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="2" className="submit-email-group">
            <Button className="submit-email-btn" type="submit">Send Email</Button>
          </Form.Group>
        </Form.Row>
      </Form>
    );
  }
  
  export default ContactUsForm;
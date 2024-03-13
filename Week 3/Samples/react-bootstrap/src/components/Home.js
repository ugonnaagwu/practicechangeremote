import React from "react";

import { Form } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";

import birthday from "../images/birthday.png";

const Home = () => {
  // We will use showAlert to determine if we should show the alert
  const [showAlert, setShowAlert] = React.useState(false);
  const [dob, setDob] = React.useState(null);

  const handleInputChange = (e) => {
    console.log("changeDate");
    setDob(e.target.value);
  };

  const saveDate = (e) => {
    console.log("saveDate");
    setShowAlert(!showAlert);
  };

  return (
    <div>
      <h3>Date / Button / Alert / Rounded Image</h3>
      <Container>
        <Form>
          <Form.Group controlId="dob">
            <Form.Label>Select your date of birth</Form.Label>
            <Form.Control
              type="date"
              name="dob"
              value={dob || ""}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button variant="primary" onClick={saveDate}>
            Save the date!
          </Button>
          <br></br>
          <Alert variant="info" show={showAlert}>
            The date {dob} is saved!
          </Alert>
        </Form>
        <br></br>
        <Image
          src={birthday}
          className="border border-primary"
          width="170"
          height="170"
          roundedCircle
        />
      </Container>
    </div>
  );
};

export default Home;

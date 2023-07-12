import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const UserForm = () => {
    let navigate = useNavigate();
  const [state, setState] = useState({
    username: "",
    email: "",
    city: "",
    phone: "",
  });


  const handleOnSubmit = (event) => {
    event.preventDefault();
    navigate("/details", { state },
    );
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    
  };

  return (
    <div>
      <Container>
        <h1>Registration Form</h1>

        <Form className="register-form" onSubmit={handleOnSubmit}>
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              name="username"
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter city"
              name="city"
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="phone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter phone"
              name="phone"
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default UserForm;

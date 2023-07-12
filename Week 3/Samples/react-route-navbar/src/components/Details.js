import React from "react";
import {Container}  from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useLocation, useNavigate} from "react-router-dom";


const Details = () => {
 
  //const navigate = useNavigate();

  const location = useLocation();
  const { username, email, city, phone } = 
    location.state;
  ;
  // const handleGoBack = () => {
  //   navigate("/", {state:location.state});
  // }

  return (
    <div>
      <Container>
        <NavLink
          to="/"
          end
          activeClassName="active"
        >
          Go Back
          {/* {handleGoBack} */}
        </NavLink>
        <div className="form-details">
          <div>
            <strong>Username:</strong> {username}
          </div>
          <div>
            <strong>Email:</strong> {email}
          </div>
          <div>
            <strong>City:</strong> {city}
          </div>
          <div>
            <strong>Phone:</strong> {phone}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Details;

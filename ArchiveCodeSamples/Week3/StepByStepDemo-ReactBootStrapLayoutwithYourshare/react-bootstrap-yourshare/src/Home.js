import React from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import YS_icon from "./images/YS_icon.png";
import "./App.css";

// Add layout template

// export class Home extends React.Component {
//   render() {
//     return (
//       <div>
//         <Container>
//           <h1> Your Share SignupPage</h1>
//           <Row>
//             <Col md={6} sm={12}>
//              Image Icon placeholder
//             </Col>
//             <Col
//               md={6}
//               sm={12}
//             >
//               <Row>
//                 <Col md={12} sm={12}>
//                   Sign-In Form placeholder
//                 </Col>
//               </Row>
//               <Row>
//                 <Col md={12} sm={12}>
//                   Form Submit Button
//                 </Col>
//               </Row>
//             </Col>
//           </Row>
//           <Row align="center">
//             <Col>
//               Sign-In Link
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     );
//   }
// }

//Part 2 add elements
// export class Home extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1> Boostrap Layout Demo</h1>
//         <h2> YourShare</h2>
//         <Container>
//           <Row>
//             <Col md={6} sm={12}>
//               <Container>
//                 <img
//                   src={YS_icon}
//                   alt="YourShare Brand icon"
//                   width="100%"
//                   height="100%"
//                 />
//               </Container>
//             </Col>
//             <Col md={6} sm={12}>
//               <Form>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                   <Form.Label>Email address</Form.Label>
//                   <Form.Control type="email" placeholder="Enter email" />
//                   <Form.Text className="text-muted">
//                     We'll never share your email with anyone else.
//                   </Form.Text>
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                   <Form.Label>Password</Form.Label>
//                   <Form.Control type="password" placeholder="Password" />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicCheckbox">
//                   <Form.Check type="checkbox" label="Check me out" />
//                 </Form.Group>
//                 {""}
//                 <Button variant="primary" type="submit">
//                   Submit
//                 </Button>
//               </Form>
//             </Col>
//           </Row>
//           <Row align="center">
//             <Col md={{ span: 4, offset: 4 }}>
//               <h3>
//                 <a href="/">Sign In</a>
//               </h3>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     );
//   }
// }

//Part 3 add inline style and style in class

export class Home extends React.Component {
  render() {
    return (
      <div>
        <h1 align="center"> Boostrap Layout Demo</h1>
        <h2 align="center"> YourShare</h2>
        <Container>
          <Row>
            <Col md={6} sm={12}>
              <Container>
                <img
                  src={YS_icon}
                  alt="YourShare Brand icon"
                  width="100%"
                  height="100%"
                />
              </Container>
            </Col>
            <Col md={6} sm={12}>
              <Row style={{ marginTop: 10 + "em", backgroundColor: "beige" }}>
                <Col md={12} sm={12}>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />

                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                  </Form>
                </Col>
              </Row>

              <Row className="content-center">
                <Col md={{ offset: 3, span: 3, md: 12 }} sm={12}>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row align="center">
            <Col>
              {" "}
              <h3>
                <a href="/">Sign In</a>{" "}
              </h3>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

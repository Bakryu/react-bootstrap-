import React, { Component } from "react";
import { Container, Nav, Row, Tab, Col } from "react-bootstrap";

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first"> Design</Nav.Link>
                  <Nav.Link eventKey="second"> Team</Nav.Link>
                  <Nav.Link eventKey="third"> Programming</Nav.Link>
                  <Nav.Link eventKey="fourth"> Frameworks</Nav.Link>
                  <Nav.Link eventKey="fifth"> Libraries</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <img
                    src="https://bipbap.ru/wp-content/uploads/2017/10/0_8eb56_842bba74_XL-640x400.jpg"
                    alt="flower"
                  />
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Doloribus, inventore.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img
                    src="https://bipbap.ru/wp-content/uploads/2017/10/0_a9e8c_fefaa1d2_XL-640x400.jpg "
                    alt="flower"
                  />
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Doloribus, inventore.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img
                    src="https://bipbap.ru/wp-content/uploads/2017/10/fon-1.jpg"
                    alt="flower"
                  />
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Doloribus, inventore.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <img
                    src="https://bipbap.ru/wp-content/uploads/2017/10/fon-2.jpg"
                    alt="flower"
                  />
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Doloribus, inventore.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <img
                    src="https://bipbap.ru/wp-content/uploads/2017/10/fon-3.jpg"
                    alt="flower"
                  />
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Doloribus, inventore.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}

import React, { Component } from "react";
import { Button, Card, CardDeck, Container } from "react-bootstrap";
import CarouselBox from "../Components/Carousel/CarouselBox";

export default class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox />
        <Container>
          <h2 className="text-center m-4">Our team</h2>
          <CardDeck>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>lorem 10</Card.Text>
                <Button variant="primary"> About team</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>lorem 10</Card.Text>
                <Button variant="primary"> About team</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/3184352/pexels-photo-3184352.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>lorem 10</Card.Text>
                <Button variant="primary"> About team</Button>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
      </>
    );
  }
}

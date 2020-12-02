import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import slideFirst from "../../assets/slide_1.jpg";
import slideSecond from "../../assets/slide_2.jpg";

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img src={slideFirst} alt="Nature" className=" d-block w-100" />
          <Carousel.Caption>
            <h3>Nature Germany</h3>
            <p>lorem</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={slideSecond} alt="Nature" className=" d-block w-100" />
          <Carousel.Caption>
            <h3>Nature Finland</h3>
            <p>lorem</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

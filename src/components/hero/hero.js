

import React, { Component } from 'react';
import './hero.css';
import { Carousel } from 'react-bootstrap';
import travel_hero from './travel_hero.jpg';
import beachBus from './beachBus.jpg';
import bigBen from './bigBen.jpg';
import greece from './greece.jpg';

class Hero extends Component {
  render() {
    return (
    
      <Carousel>
        <Carousel.Item>
          <img width="100%" src={travel_hero} />
          <Carousel.Caption>
            <h3>Welcome to my travel site</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%"  src={beachBus} />
          <Carousel.Caption>
            <h3>THIS SITE IS ABOUT PLACES ID LIKE TO TRAVEL</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img width="100%"  src={bigBen} />
          <Carousel.Caption>
            <h3>HERE ARE SOME PLACES ID LIKE TO TRAVEL</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img width="100%"  src={greece} />
          <Carousel.Caption>
            <h3>YAY TRAVEL</h3>
          </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    
    );
  }
}
export default Hero;
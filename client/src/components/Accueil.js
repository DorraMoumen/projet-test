import React, { PureComponent } from 'react';
import { Carousel } from 'react-bootstrap';
import "./CarouselStyles.css";
import { Button } from 'react-bootstrap';
export class Accueil extends PureComponent {
  render() {
    return (
      <div style={{ width:"100%" , height:"50%"}}>
      <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-blockw-100"
      src="https://img.bfmtv.com/c/630/420/871/7b9f41477da5f240b24bd67216dd7.jpg"
      alt="First slide"
     />
    <Carousel.Caption>
      <h5>conception et développement d'un site web de publication de PFE</h5>
      <p>fACULTE: Faculté Des Sciences Economiques Et De Gestion De Nabeul</p>
      <Button variant="success" type="submit">
           Voir plus  
        </Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-blockw-100"
      src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Button variant="success" type="submit">
           Voir plus  
        </Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-blockw-100"
      src="holder.js/800x400?text=Third slide&bg=e5e5e5"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      <Button variant="success" type="submit">
           Voir plus  
        </Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      
      </div>
    )
  }
}

export default Accueil ;
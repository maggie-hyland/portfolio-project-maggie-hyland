import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';


const CarouselComponent = () => {

  const images = [
    { id: 1, src: 'portfolio-project-maggie-hyland/src/images/GetReadyForecastImg.png' },
    { id: 2, src: 'image2.jpg' },
    { id: 3, src: 'image3.jpg' },
    { id: 4, src: 'image4.jpg' },
    { id: 5, src: 'image5.jpg' },
    // Add more images
  ];

  return (
    <Carousel nextLabel="" prevLabel="">
      {images.map((image) => (
        <Carousel.Item key={image.id}>
          <div className="row">
            {images
              .slice(images.indexOf(image), images.indexOf(image) + 3)
              .map((item) => (
                <div key={item.id} className="col-4">
                  <img src={item.src} alt={`Image ${item.id}`} className="img-fluid" />
                </div>
              ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
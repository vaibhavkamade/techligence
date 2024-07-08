import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel({ images }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const imageStyle = {
    height: '50%', // Set height to 50% of the parent container
    width: '100%', // Set width to 100% of the parent container
    objectFit: 'contain', // Scale the image while maintaining its aspect ratio
    border: '1px solid white' // Add a white border
  };

 

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={null} style={{height:'100%' , width:'100%'}}>
        
      {images.map((imageSrc, idx) => (
        <Carousel.Item key={idx} style={imageStyle}>
          <img
            className="d-block w-100"
            src={imageSrc}
          />
        </Carousel.Item>
      ))}
   
    </Carousel>
  );
}

export default ControlledCarousel;

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import client1 from '../assets/client1.jpeg';
import client2 from '../assets/client2.jpeg';
import client3 from '../assets/client3.jpeg';

function LandingPage() {
  return (
      <div className="carousel" style={{ width: '80%', margin: 'auto' }}>
      <Carousel>
        <div>
          <img src={client1} alt="Client 1" />
          <p className="legend">Client 1</p>
        </div>
        <div>
          <img src={client2} alt="Client 2" />
          <p className="legend">Client 2</p>
        </div>
        <div>
          <img src={client3} alt="Client 3" />
          <p className="legend">Client 3</p>
        </div>
      </Carousel>
      {/* Add your about section here */}
    </div>
  );
}

export default LandingPage;
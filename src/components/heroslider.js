import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Productimg1 from '../image/product1.jpg'
import Heroimg1 from '../image/heroimg1.jpg';
import Heroimg2 from '../image/heroimg2.jpg';
import Heroimg3 from '../image/heroimg3.jpg';


const imageStyle = {
  width: '100%', 
  height: '70vh', 
  objectFit: 'cover',
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
};
function HeroSlider() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
         <Carousel.Item>
          <img src={Productimg1} alt="First slide" style={{ ...imageStyle, width: '50%',paddingTop:'20px' ,paddingBottom:'20px'}}/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Heroimg1} alt="First slide" style={imageStyle}/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Heroimg2} alt="Second slide" style={imageStyle}/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Heroimg3} alt="Third slide"style={imageStyle} />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
export default HeroSlider;
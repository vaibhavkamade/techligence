import Carousel from 'react-bootstrap/Carousel';


const slideImages = [
  {
    id: 1,
    name: 'Product 1',
    imageSrc: 'https://imgs.search.brave.com/Dr5Ld8TlB-ckcR4RJSC5Lsix3-j0lPkgB4r1WBw1QYc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MDYxMDc1NTcxOTUt/MGUyOWE0YjViNGFh/P2ZtPWpwZyZ3PTMw/MDAmYXV0bz1mb3Jt/YXQmZml0PWNyb3Am/cT02MCZpeGxpYj1y/Yi00LjAuMyZpeGlk/PU0zd3hNakEzZkRC/OE1IeHpaV0Z5WTJo/OE9IeDhjMmh2WlhO/OFpXNThNSHg4TUh4/OGZEQT0',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur amet esse culpa! Veniam, minima suscipit.',
    link: 'https://example.com/product1'
  },
  {
    id: 2,
    name: 'Product 2',
    imageSrc: 'https://imgs.search.brave.com/Dr5Ld8TlB-ckcR4RJSC5Lsix3-j0lPkgB4r1WBw1QYc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MDYxMDc1NTcxOTUt/MGUyOWE0YjViNGFh/P2ZtPWpwZyZ3PTMw/MDAmYXV0bz1mb3Jt/YXQmZml0PWNyb3Am/cT02MCZpeGxpYj1y/Yi00LjAuMyZpeGlk/PU0zd3hNakEzZkRC/OE1IeHpaV0Z5WTJo/OE9IeDhjMmh2WlhO/OFpXNThNSHg4TUh4/OGZEQT0',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur amet esse culpa! Veniam, minima suscipit.',
    link: 'https://example.com/product2'
  },
  {
    id: 3,
    name: 'Product 3',
    imageSrc: 'https://imgs.search.brave.com/Dr5Ld8TlB-ckcR4RJSC5Lsix3-j0lPkgB4r1WBw1QYc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MDYxMDc1NTcxOTUt/MGUyOWE0YjViNGFh/P2ZtPWpwZyZ3PTMw/MDAmYXV0bz1mb3Jt/YXQmZml0PWNyb3Am/cT02MCZpeGxpYj1y/Yi00LjAuMyZpeGlk/PU0zd3hNakEzZkRC/OE1IeHpaV0Z5WTJo/OE9IeDhjMmh2WlhO/OFpXNThNSHg4TUh4/OGZEQT0',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur amet esse culpa! Veniam, minima suscipit.',
    link: 'https://example.com/product3'
  }
];

const images = [
  'https://imgs.search.brave.com/cCxgi8gca6951CJc_lzPYEU5fO5qmWYq9doi51Oejao/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcx/MjI0NDY5L3Bob3Rv/L2NhbnZhcy1zaG9l/cy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9b0Q1QTYxeHhn/bmEtMFdOYWZOY1p4/eVNTd0NpRW5VQ3M1/d2lESlZmYjJ0UT0',
  'https://imgs.search.brave.com/FG5bWYhcf6bfBkK5q4G6qQvHwtJd2vsGnBtL3Hfb0l8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ1/MzgxMDgwNS9waG90/by9ydW5uaW5nLXNo/b2VzLndlYnA_Yj0x/JnM9MTcwNjY3YSZ3/PTAmaz0yMCZjPXZ0/alFBZm55LUpRV21v/ZUNsY2s4OW5MQmky/Y1Y4aFFQenJfeV9O/X1IzeEk9',
  'https://imgs.search.brave.com/8vdb7wrzJf03_DFyAS8vvqLhE8lCXmMDX5Q9KPoxOdQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM1/MTcwMTYwL3Bob3Rv/L3Nwb3J0LXNob2Vz/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1hRDlPRC1TSExP/UFlmN2U2aENlZ2xS/RzZhY1NYMF9pWHNu/ZTY5b1FFMzd3PQ',
  'https://imgs.search.brave.com/iCvoMcrTslka-bAWpjl5xASpyFNmP2DucLSjbomeMjw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9v/bmUtYmxhY2stc25l/YWtlci1zaG9lLWlz/b2xhdGVkLXdoaXRl/XzkzNjc1LTEzMTI2/Ni5qcGc_c2l6ZT02/MjYmZXh0PWpwZw'
];

function ImageSlider() {
  return (
    <Carousel data-bs-theme="dark">

       {
        images.map((image,index)=>(
          <Carousel.Item>
        <img
          className="d-block w-100"
          src={image}
          alt="First slide"
        />
      </Carousel.Item>
        ))
       }
    </Carousel>
  );
}

export default ImageSlider;
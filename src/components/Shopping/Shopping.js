// Shopping.js
import React from 'react';
import FacetFilter from '../filter/FacetFilter';
import Footer from '../Footer';
import ProductCard from '../Product/ProductCard';
import './shopping.css';
import styled, { keyframes, css } from "styled-components";

const products = [
  {
    id: 1,
    name: 'Product 1',
    imageSrc: 'https://imgs.search.brave.com/Dr5Ld8TlB-ckcR4RJSC5Lsix3-j0lPkgB4r1WBw1QYc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MDYxMDc1NTcxOTUt/MGUyOWE0YjViNGFh/P2ZtPWpwZyZ3PTMw/MDAmYXV0bz1mb3Jt/YXQmZml0PWNyb3Am/cT02MCZpeGxpYj1y/Yi00LjAuMyZpeGlk/PU0zd3hNakEzZkRC/OE1IeHpaV0Z5WTJo/OE9IeDhjMmh2WlhO/OFpXNThNSHg4TUh4/OGZEQT0',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur amet esse culpa! Veniam, minima suscipit.',
    link: 'https://example.com/product1',
    amount:100,
  },
  {
    id: 2,
    name: 'Product 2',
    imageSrc: 'https://imgs.search.brave.com/Dr5Ld8TlB-ckcR4RJSC5Lsix3-j0lPkgB4r1WBw1QYc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MDYxMDc1NTcxOTUt/MGUyOWE0YjViNGFh/P2ZtPWpwZyZ3PTMw/MDAmYXV0bz1mb3Jt/YXQmZml0PWNyb3Am/cT02MCZpeGxpYj1y/Yi00LjAuMyZpeGlk/PU0zd3hNakEzZkRC/OE1IeHpaV0Z5WTJo/OE9IeDhjMmh2WlhO/OFpXNThNSHg4TUh4/OGZEQT0',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur amet esse culpa! Veniam, minima suscipit.',
    link: 'https://example.com/product2',
    amount:100,
  },
  {
    id: 3,
    name: 'Product 3',
    imageSrc: 'https://imgs.search.brave.com/Dr5Ld8TlB-ckcR4RJSC5Lsix3-j0lPkgB4r1WBw1QYc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MDYxMDc1NTcxOTUt/MGUyOWE0YjViNGFh/P2ZtPWpwZyZ3PTMw/MDAmYXV0bz1mb3Jt/YXQmZml0PWNyb3Am/cT02MCZpeGxpYj1y/Yi00LjAuMyZpeGlk/PU0zd3hNakEzZkRC/OE1IeHpaV0Z5WTJo/OE9IeDhjMmh2WlhO/OFpXNThNSHg4TUh4/OGZEQT0',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur amet esse culpa! Veniam, minima suscipit.',
    link: 'https://example.com/product3',
    amount:100,
  },
  {
    id: 4,
    name: 'Product 4',
    imageSrc: 'https://imgs.search.brave.com/Dr5Ld8TlB-ckcR4RJSC5Lsix3-j0lPkgB4r1WBw1QYc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MDYxMDc1NTcxOTUt/MGUyOWE0YjViNGFh/P2ZtPWpwZyZ3PTMw/MDAmYXV0bz1mb3Jt/YXQmZml0PWNyb3Am/cT02MCZpeGxpYj1y/Yi00LjAuMyZpeGlk/PU0zd3hNakEzZkRC/OE1IeHpaV0Z5WTJo/OE9IeDhjMmh2WlhO/OFpXNThNSHg4TUh4/OGZEQT0',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur amet esse culpa! Veniam, minima suscipit.',
    link: 'https://example.com/product4',
    amount:100,
  },
  {
    id: 5,
    name: 'Product 5',
    imageSrc: 'https://imgs.search.brave.com/Dr5Ld8TlB-ckcR4RJSC5Lsix3-j0lPkgB4r1WBw1QYc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MDYxMDc1NTcxOTUt/MGUyOWE0YjViNGFh/P2ZtPWpwZyZ3PTMw/MDAmYXV0bz1mb3Jt/YXQmZml0PWNyb3Am/cT02MCZpeGxpYj1y/Yi00LjAuMyZpeGlk/PU0zd3hNakEzZkRC/OE1IeHpaV0Z5WTJo/OE9IeDhjMmh2WlhO/OFpXNThNSHg4TUh4/OGZEQT0',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur amet esse culpa! Veniam, minima suscipit.',
    link: 'https://example.com/product5',
    amount:100,
  },
  {
    id: 6,
    name: 'Product 6',
    imageSrc: 'https://imgs.search.brave.com/Dr5Ld8TlB-ckcR4RJSC5Lsix3-j0lPkgB4r1WBw1QYc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MDYxMDc1NTcxOTUt/MGUyOWE0YjViNGFh/P2ZtPWpwZyZ3PTMw/MDAmYXV0bz1mb3Jt/YXQmZml0PWNyb3Am/cT02MCZpeGxpYj1y/Yi00LjAuMyZpeGlk/PU0zd3hNakEzZkRC/OE1IeHpaV0Z5WTJo/OE9IeDhjMmh2WlhO/OFpXNThNSHg4TUh4/OGZEQT0',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur amet esse culpa! Veniam, minima suscipit.',
    link: 'https://example.com/product6',
    amount:100,
  },
  {
    id: 7,
    name: 'Product 7',
    imageSrc: 'https://imgs.search.brave.com/Dr5Ld8TlB-ckcR4RJSC5Lsix3-j0lPkgB4r1WBw1QYc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MDYxMDc1NTcxOTUt/MGUyOWE0YjViNGFh/P2ZtPWpwZyZ3PTMw/MDAmYXV0bz1mb3Jt/YXQmZml0PWNyb3Am/cT02MCZpeGxpYj1y/Yi00LjAuMyZpeGlk/PU0zd3hNakEzZkRC/OE1IeHpaV0Z5WTJo/OE9IeDhjMmh2WlhO/OFpXNThNSHg4TUh4/OGZEQT0',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur amet esse culpa! Veniam, minima suscipit.',
    link: 'https://example.com/product7',
    amount:100,
  },
  {
    id: 8,
    name: 'Product 8',
    imageSrc: 'https://imgs.search.brave.com/Dr5Ld8TlB-ckcR4RJSC5Lsix3-j0lPkgB4r1WBw1QYc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MDYxMDc1NTcxOTUt/MGUyOWE0YjViNGFh/P2ZtPWpwZyZ3PTMw/MDAmYXV0bz1mb3Jt/YXQmZml0PWNyb3Am/cT02MCZpeGxpYj1y/Yi00LjAuMyZpeGlk/PU0zd3hNakEzZkRC/OE1IeHpaV0Z5WTJo/OE9IeDhjMmh2WlhO/OFpXNThNSHg4TUh4/OGZEQT0',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur amet esse culpa! Veniam, minima suscipit.',
    link: 'https://example.com/product8',
    amount:100,
  },
  {
    id: 9,
    name: 'Product 9',
    imageSrc: 'https://imgs.search.brave.com/Dr5Ld8TlB-ckcR4RJSC5Lsix3-j0lPkgB4r1WBw1QYc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MDYxMDc1NTcxOTUt/MGUyOWE0YjViNGFh/P2ZtPWpwZyZ3PTMw/MDAmYXV0bz1mb3Jt/YXQmZml0PWNyb3Am/cT02MCZpeGxpYj1y/Yi00LjAuMyZpeGlk/PU0zd3hNakEzZkRC/OE1IeHpaV0Z5WTJo/OE9IeDhjMmh2WlhO/OFpXNThNSHg4TUh4/OGZEQT0',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur amet esse culpa! Veniam, minima suscipit.',
    link: 'https://example.com/product9',
    amount:100,
  },
];

const images = [
  'https://imgs.search.brave.com/Dr5Ld8TlB-ckcR4RJSC5Lsix3-j0lPkgB4r1WBw1QYc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MDYxMDc1NTcxOTUt/MGUyOWE0YjViNGFh/P2ZtPWpwZyZ3PTMw/MDAmYXV0bz1mb3Jt/YXQmZml0PWNyb3Am/cT02MCZpeGxpYj1y/Yi00LjAuMyZpeGlk/PU0zd3hNakEzZkRC/OE1IeHpaV0Z5WTJo/OE9IeDhjMmh2WlhO/OFpXNThNSHg4TUh4/OGZEQT0',
  'https://imgs.search.brave.com/cCxgi8gca6951CJc_lzPYEU5fO5qmWYq9doi51Oejao/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcx/MjI0NDY5L3Bob3Rv/L2NhbnZhcy1zaG9l/cy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9b0Q1QTYxeHhn/bmEtMFdOYWZOY1p4/eVNTd0NpRW5VQ3M1/d2lESlZmYjJ0UT0',
  'https://imgs.search.brave.com/FG5bWYhcf6bfBkK5q4G6qQvHwtJd2vsGnBtL3Hfb0l8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ1/MzgxMDgwNS9waG90/by9ydW5uaW5nLXNo/b2VzLndlYnA_Yj0x/JnM9MTcwNjY3YSZ3/PTAmaz0yMCZjPXZ0/alFBZm55LUpRV21v/ZUNsY2s4OW5MQmky/Y1Y4aFFQenJfeV9O/X1IzeEk9',
  'https://imgs.search.brave.com/8vdb7wrzJf03_DFyAS8vvqLhE8lCXmMDX5Q9KPoxOdQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM1/MTcwMTYwL3Bob3Rv/L3Nwb3J0LXNob2Vz/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1hRDlPRC1TSExP/UFlmN2U2aENlZ2xS/RzZhY1NYMF9pWHNu/ZTY5b1FFMzd3PQ',
  'https://imgs.search.brave.com/iCvoMcrTslka-bAWpjl5xASpyFNmP2DucLSjbomeMjw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9v/bmUtYmxhY2stc25l/YWtlci1zaG9lLWlz/b2xhdGVkLXdoaXRl/XzkzNjc1LTEzMTI2/Ni5qcGc_c2l6ZT02/MjYmZXh0PWpwZw'
];

const Shopping = () => {
  return (
    <>
    
      <div className='shopping-container'>
        <FacetFilter />
        <div className='product-container'>
          {products.map(product => (
            <ProductCard
              id={product.id}
              key={product.id}
              name={product.name}
              imageSrc={product.imageSrc}
              description={product.description}
              link={product.link}
            />
          ))}
        </div>
      </div>
      <div className='appContainer'>
      
      <Wrapper>
      <Text>Unlock amazing products</Text>
        <Marquee>
          <MarqueeGroup>
            {images.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {images.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
        <Marquee>
          <MarqueeGroup2>
            {images.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {images.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
        </Marquee>
      </Wrapper>
      </div> 
      <hr />
      <Footer />
    </>
  );
}

export default Shopping;

const appContainer = styled.div`
  width: 80vw;
  height: 100vh;
  color: #000000;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top:20px

`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #02203c;
`;

const Note = styled.div`
  font-size: 18px;
  font-weight: 200;
  margin-bottom: 40px;
  color: #7c8e9a;
`;

const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

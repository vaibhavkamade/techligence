import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from 'react-router-dom';
import {
  faHashtag,
  faCakeCandles,
  faPuzzlePiece,
  faChildren,
  faClipboard,
  faCartShopping
} from "@fortawesome/free-solid-svg-icons";
import "./ProductDetail.css";
import Footer from "../../components/Footer.js";
import Carousel from 'react-bootstrap/Carousel';
import {Link} from 'react-router-dom';


const images = [
  "https://imgs.search.brave.com/cCxgi8gca6951CJc_lzPYEU5fO5qmWYq9doi51Oejao/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcx/MjI0NDY5L3Bob3Rv/L2NhbnZhcy1zaG9l/cy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9b0Q1QTYxeHhn/bmEtMFdOYWZOY1p4/eVNTd0NpRW5VQ3M1/d2lESlZmYjJ0UT0",
  "https://imgs.search.brave.com/FG5bWYhcf6bfBkK5q4G6qQvHwtJd2vsGnBtL3Hfb0l8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ1/MzgxMDgwNS9waG90/by9ydW5uaW5nLXNo/b2VzLndlYnA_Yj0x/JnM9MTcwNjY3YSZ3/PTAmaz0yMCZjPXZ0/alFBZm55LUpRV21v/ZUNsY2s4OW5MQmky/Y1Y4aFFQenJfeV9O/X1IzeEk9",
  "https://imgs.search.brave.com/8vdb7wrzJf03_DFyAS8vvqLhE8lCXmMDX5Q9KPoxOdQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM1/MTcwMTYwL3Bob3Rv/L3Nwb3J0LXNob2Vz/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1hRDlPRC1TSExP/UFlmN2U2aENlZ2xS/RzZhY1NYMF9pWHNu/ZTY5b1FFMzd3PQ",
  "https://imgs.search.brave.com/iCvoMcrTslka-bAWpjl5xASpyFNmP2DucLSjbomeMjw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9v/bmUtYmxhY2stc25l/YWtlci1zaG9lLWlz/b2xhdGVkLXdoaXRl/XzkzNjc1LTEzMTI2/Ni5qcGc_c2l6ZT02/MjYmZXh0PWpwZw",
];



const ProductDetail = () => {
  const [cart,setCart] = useState([]);

  const location = useLocation();
  const { state } = location;
  const { id, name, imageSrc, description ,amount} = state || {};

  if (!state) {
    return <div>No product data available.</div>;
  }

  
  const handleClick = () =>{
    setCart([...cart,state]);
  }



  return (
    <>
      <div className="product-detail-container">
        <div className="left">
        <section className="above">
  <Carousel data-bs-theme="dark" interval={1500} >
    {images.map((image, index) => (
      <Carousel.Item key={index}>
        <img
          className="d-block w-100 carousel-image"
          src={image}
          alt={`Slide ${index + 1}`}
        />
      </Carousel.Item>
    ))}
  </Carousel>
</section>

          <section className="below">
            <div className="item-icon" style={{
              borderRight:'1px solid gray'
            }}>
              <span>
                <FontAwesomeIcon icon={faCakeCandles} className="fa-2x" />
              </span>
              <div>
                <h6>18+</h6>{" "}
              </div>
              <div> <strong>Ages</strong> </div>
            </div>
            <hr />
            <div className="item-icon" style={{
              borderRight:'1px solid gray'
            }}>
              <span>
                <FontAwesomeIcon icon={faPuzzlePiece}  className="fa-2x"/>
              </span>
              <div>
                <h6>327</h6>
              </div>
              <div> <strong>Pieces</strong> </div>
            </div>
            <hr />
            <div className="item-icon">
              <span>
                <FontAwesomeIcon icon={faHashtag}  className="fa-2x"/>
                
              </span>
              <div>
                <h6>10369</h6>
              </div>
              <div><strong>Items</strong> </div>
            </div>
          </section>
        </div>
        <div className="right">
            <div>
              <span style={
                {
                  backgroundColor:'yellow',
                  fontSize:'medium',
                  fontWeight:'800',
                  padding:'3px'
                }
              }>
                New
              </span>
            </div>
            <div>
              <h5> Plum Blossom </h5>
              <a href="/">
              <img src="https://www.lego.com/cdn/cs/set/assets/blt7c9332ed5ec6017d/icons-logo-pos-600w.png?format=png&amp;height=30&amp;dpr=1" alt="LEGO® Icons"/>
              </a>
            </div>
            <div>
              <span>Warning small Parts !! </span>
              <FontAwesomeIcon icon={faChildren}  className="fa-2x"/>
            </div>
            <hr />
            <div>
            <FontAwesomeIcon icon={faClipboard}  className='fa-2x'/>
            <span> Building instructions </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg>
            </div>
            <hr/>

            <div>
            <button className='btn' onClick={() => handleClick()}>Add to Cart</button>
            <span>
            <Link 
            to={`/shopping/cart`}
            state= {{ id, name, imageSrc, description , amount}}
          >
            <button>
              View cart <FontAwesomeIcon icon={faCartShopping}/>
            </button>
          </Link>

      </span>
              
            </div>

        </div>
      </div>

      <hr />

      <div className="product-char">
        <div className="product-char-1">
          <h1>Upgrading Education with Forward-Thinking Initiatives</h1>
          <span></span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.{" "}
            <strong>
              {" "}
              Impedit, illo? Amet sed vero ullam eligendi quidem velit sit esse
              beatae repellendus rem,
            </strong>{" "}
            consequuntur recusandae autem perferendis tempore blanditiis debitis
            culpa. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, pariatur!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, totam.
          </p>
        </div>

        <div className="product-char-2">
          <section className="product-section">
            <div className="product-left">
              <img
                src="https://imgs.search.brave.com/8vdb7wrzJf03_DFyAS8vvqLhE8lCXmMDX5Q9KPoxOdQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM1/MTcwMTYwL3Bob3Rv/L3Nwb3J0LXNob2Vz/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1hRDlPRC1TSExP/UFlmN2U2aENlZ2xS/RzZhY1NYMF9pWHNu/ZTY5b1FFMzd3PQ"
                alt=""
              />
            </div>
            <div className="product-right">
              <h2>Heading 1</h2>
              <h5>heading five</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                <strong>
                  {" "}
                  Suscipit id enim dolor ipsum accusamus ea tempora! Voluptatum,
                  rem. Officia{" "}
                </strong>
                , debitis soluta. In natus cumque doloribus tenetur provident
                vel, aspernatur exercitationem!
              </p>
              <div className="product-button">
                <button> Watch Video </button>
                <button> Explore More </button>
              </div>
            </div>
          </section>
          <section className="product-section">
            <div className="product-left">
              <h2>Heading 1</h2>
              <h5>heading five</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                <strong>
                  {" "}
                  Suscipit id enim dolor ipsum accusamus ea tempora! Voluptatum,
                  rem. Officia,
                </strong>{" "}
                debitis soluta. In natus cumque doloribus tenetur provident vel,
                aspernatur exercitationem!
              </p>
              <div className="product-button">
                <button> Watch Video </button>
                <button> Explore More </button>
              </div>
            </div>
            <div className="product-right">
              <img
                src="https://imgs.search.brave.com/cCxgi8gca6951CJc_lzPYEU5fO5qmWYq9doi51Oejao/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcx/MjI0NDY5L3Bob3Rv/L2NhbnZhcy1zaG9l/cy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9b0Q1QTYxeHhn/bmEtMFdOYWZOY1p4/eVNTd0NpRW5VQ3M1/d2lESlZmYjJ0UT0"
                alt=""
              />
            </div>
          </section>
          <section className="product-section">
            <div className="product-left">
              <img
                src="https://imgs.search.brave.com/iCvoMcrTslka-bAWpjl5xASpyFNmP2DucLSjbomeMjw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9v/bmUtYmxhY2stc25l/YWtlci1zaG9lLWlz/b2xhdGVkLXdoaXRl/XzkzNjc1LTEzMTI2/Ni5qcGc_c2l6ZT02/MjYmZXh0PWpwZw"
                alt=""
              />
            </div>
            <div className="product-right">
              <h2>Heading 1</h2>
              <h5>heading five</h5>
              <p>
                Lorem ipsum dolor sit amet{" "}
                <strong>
                  {" "}
                  consectetur adipisicing elit. Suscipit id enim dolor ipsum
                  accusamus ea tempora! Voluptatum, rem. Officia,{" "}
                </strong>{" "}
                debitis soluta. In natus cumque doloribus tenetur provident vel,
                aspernatur exercitationem!
              </p>
              <div className="product-button">
                <button> Watch Video </button>
                <button> Explore More </button>
              </div>
            </div>
          </section>
        </div>
      </div>

      <hr />
      <Footer />
    </>
  );
};

export default ProductDetail;

// Shopping.js
import React from 'react';
import FacetFilter from '../filter/FacetFilter';
import Footer from '../Footer';
import ProductCard from '../Product/ProductCard';
import './shopping.css';
import { products } from '../../assets/product';
import Slider from './Slider';


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
              amount={product.amount}
              quantity={product.quantity}
              link={product.link}
            />
          ))}
        </div>
      </div>
      <Slider/>
      <hr />
      <Footer />
    </>
  );
}

export default Shopping;


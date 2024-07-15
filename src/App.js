import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Bloglist from './pages/Bloglist'; // Import Bloglist component
import Blogs from './pages/Blogs'; // Import Blog component for individual blog post
import About from './pages/About';
import Contact from './pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogProvider from './context/BlogContext'; // Import the BlogProvider
import './App.css'
import Shopping from './components/Shopping/Shopping';
import ProductDetail from './components/Product/ProductDetail';
import Layout from './layout/Layout';
import Cart from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import CheckoutPage from './components/Cart/CheckOut';
import Footer from './components/Footer';


const App = () => {
  return (
    <>
    <BlogProvider>
      <CartProvider>
      <Router>
        <div className="App">
          {/* Navigation Bar */}
          <Header/>

          {/* Main content area */}
          <div className="container mt-4" style={{height:'100%',width:'100%'}}>
            <Layout>
        
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blogs" element={<Bloglist />} />
              <Route path="/blogs/:id" element={<Blogs />} />
              <Route path='/shopping' element={<Shopping />} />
              <Route path='/shopping/:id' element={<ProductDetail />} /> 
              <Route path='/shopping/cart' element={<Cart/>} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path='/shopping/cart/checkout' element={<CheckoutPage/>}/>
            </Routes>
         
            </Layout>
           
          </div>
        </div>
      </Router>
      </CartProvider>
    </BlogProvider>
    </>
  );
}

export default App;

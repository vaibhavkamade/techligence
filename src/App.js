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
import Cart from './components/Product/Cart';


const App = () => {
  return (
    <BlogProvider>
      <Router>
        <div className="App">
          {/* Navigation Bar */}
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">My Website</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/blogs">Blogs</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/shopping">Shopping</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          {/* Main content area */}
          <div className="container mt-4">
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
            </Routes>
         
            </Layout>
           
          </div>
        </div>
      </Router>
    </BlogProvider>
  );
}

export default App;

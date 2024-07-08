import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    let backgroundColor;

    switch (location.pathname) {
      case '/':
        backgroundColor = 'lightblue';
        break;
      case '/blogs':
        backgroundColor = '#FFFDD0';
        break;
      case '/blogs/:id':
        backgroundColor = '#F7F7F7';
        break;
      case '/shopping':
        backgroundColor = '#F7F7F7';
        break;
      case '/shopping/:id':
        backgroundColor = 'lightgoldenrodyellow';
        break;
      case '/about':
        backgroundColor = 'lightpink';
        break;
      case '/contact':
        backgroundColor = '#ebedee';
        break;
      default:
        backgroundColor = '#fff';
    }

    document.querySelector('.App').style.backgroundColor = backgroundColor;
  }, [location.pathname]);

  return <div>{children}</div>;
};


export default Layout;

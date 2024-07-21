import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    let backgroundColor;
 

    switch (location.pathname) {
      case '/':
        backgroundColor = '#FEF7E8';

        break;
      case '/blogs':
        backgroundColor = '#F7F7F7';
        break;
      case '/blogs/:id':
        backgroundColor = '#F7F7F7';
        break;
      case '/shopping':
        backgroundColor = '#F8F9FA';
        break;
      case '/shopping/:id':
        backgroundColor = 'lightgoldenrodyellow';
        break;
      case '/about':
        backgroundColor = '#FBF4EA';
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

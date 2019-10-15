import React from 'react';
import Navbar from './Navbar';
import DropAndDragField from './DropAndDragField';

const HomePage = () => {
  return(
    <div id="home-page">
      <div className="home-page-background-image"></div>
      <div className="navigation">
        <Navbar />
      </div>
      <DropAndDragField />
    </div>
  );
};

export default HomePage;

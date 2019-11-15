import React from 'react'
import NavMenu from '../menu/NavMenu';
import Navbar from './Navbar';

function HeaderSection() {
    return (
      <div className="headerSection">
        <Navbar />
        <NavMenu />
      </div>
    );
  }
  
  export default HeaderSection;
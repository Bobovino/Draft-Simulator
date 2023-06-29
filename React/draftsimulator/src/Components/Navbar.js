import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { AiOutlineMenu } from 'react-icons/ai';
import { GiCow } from 'react-icons/gi';

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <AiOutlineMenu className="menu-icon" onClick={toggleSidebar} />
        <GiCow  size={24} />
        <p>Bobovino</p>
      </div>
      <p>Options</p>
      <Sidebar open={sidebarOpen}  toggleSidebar={toggleSidebar}/>
    </nav>
  );
}

export default Navbar;

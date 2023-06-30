import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

function Sidebar({ open, toggleSidebar }) {
  return (
    <aside className={`sidebar ${open ? 'open' : ''}`}>
      <AiOutlineMenu className="menu-icon" onClick={toggleSidebar} />
      <ul>
        <li>Quick draft</li>
        <li>Tournament</li>
        <li>Clash</li>
        <li>Other game modes</li>
        <li>Editor</li>
      </ul>
    </aside>
  );
}

export default Sidebar;


import React from 'react';
import { NavLink } from 'react-router-dom';
import wheelIcon from '../assets/wheel.svg';
import mapIcon from '../assets/map.svg';
import mechanismIcon from '../assets/mechanism.svg';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Good Green Work</h2>
      </div>
      <nav className="sidebar-nav">
        <NavLink 
          to="/" 
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          end
        >
          <span className="nav-icon"><img src={wheelIcon} alt="Wheel" style={{ width: '100%', height: '100%' }} /></span>
          The Strategic Flywheel
        </NavLink>
        
        <NavLink 
          to="/motivation-map" 
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          <span className="nav-icon"><img src={mapIcon} alt="Map" style={{ width: '100%', height: '100%' }} /></span>
          Motivational Theories Map
        </NavLink>
        
        <NavLink 
          to="/mechanism" 
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          <span className="nav-icon"><img src={mapIcon} alt="Mechanism" style={{ width: '100%', height: '100%' }} /></span>
          Map of Good Work
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;

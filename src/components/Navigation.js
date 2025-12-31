import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaHeart, FaImages, FaEnvelope, FaStar, FaGift } from 'react-icons/fa';
import './Navigation.css';

// Cute floating navigation bar
const Navigation = () => {
  const navItems = [
    { path: '/', icon: <FaHome />, label: 'Home' },
    { path: '/story', icon: <FaHeart />, label: 'Our Story' },
    { path: '/words', icon: <FaEnvelope />, label: 'My Words' },
    { path: '/reasons', icon: <FaStar />, label: 'Reasons' },
    { path: '/gallery', icon: <FaImages />, label: 'Gallery' },
    { path: '/surprise', icon: <FaGift />, label: 'Surprise' },
  ];

  return (
    <nav className="navigation">
      <div className="nav-container">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            title={item.label}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;

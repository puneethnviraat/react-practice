import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidenav">
      <Link to="/">Home</Link>
      <Link to="/Counter">Counter</Link>
      <Link to="/accordian">Accordian</Link>
      <Link to="/random-color">Random Color</Link>
      <Link to="/star-rating">Ratings</Link>
      <Link to="/image-slider">Image Slider</Link>
      <Link to="/counter">Counter</Link>
      <Link to="/tic-toc-toe">Tic-Toc_Toe</Link>
      <Link to="/treeview">Menus</Link>
      <Link to="/custom-modal">Custom modal</Link>
      <Link to="/custom-tabs">Custom tabs</Link>
      <Link to="/light-dark-mode">Switch theme</Link>
      <Link to="/autocomplete">Autocomplete</Link>
      <Link to="/scroll-indicator">Scroll indicator</Link>
      <Link to="/qr-code-generator">QR code generator</Link>
      <Link to="/counter-by-reducer">Counter by useReducer</Link>
    </div>
  );
};

export default Sidebar;

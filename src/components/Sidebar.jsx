import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidenav">
      <Link to="/">Home</Link>
      <Link to="/Counter">Counter</Link>
      <Link to="/accordian">Accordian</Link>
      <Link to="/random-color">Random Color</Link>
    </div>
  );
};

export default Sidebar;


import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <nav className="text-sm text-gray-500">
        <span>Home</span>
        <span className="mx-2">&gt;</span>
        <span>Courses</span>
        <span className="mx-2">&gt;</span>
        <span className="text-gray-700 font-medium">Course Details</span>
      </nav>
    </header>
  );
};

export default Header;

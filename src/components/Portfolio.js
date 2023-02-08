import React, { useState } from 'react';
import Header from './Header';

function Portfolio() {
  const [currentPage, setCurrentPage] = useState('aboutMe');

  return (
    <div className="container">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default Portfolio;

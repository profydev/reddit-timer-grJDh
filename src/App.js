import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="search" element={<Search />} />
    </Routes>
  );
}

export default App;

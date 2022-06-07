import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './views/Home/Home';
import Search from './views/Search/Search';

// eslint-disable-next-line arrow-body-style
const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="search" element={<Search />} />
    </Routes>
  );
};

export default App;

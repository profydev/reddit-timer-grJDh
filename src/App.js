import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './views/Home/Home';
import Search from './views/Search/Search';

// eslint-disable-next-line arrow-body-style
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

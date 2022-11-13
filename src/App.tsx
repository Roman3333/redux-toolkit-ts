import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import './style/global.scss';

import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const Basket = lazy(() => import(/* webpackChunkName: "Basket" */ './pages/Basket/Basket'));

function App() {
  return (
    <main className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;

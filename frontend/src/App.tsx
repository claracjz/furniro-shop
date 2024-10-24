import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Infobox from './components/Infobox';
import Footer from './components/Footer';
import Banner from './components/Banner';
import FilterBar from './components/FilterBar';
import Categories from './components/Categories';

const App: React.FC = () => {
 

  return (
    <Router>
      <Routes>
        <Route 
        path='/'
        element={
        <>
        <Header/>
        <Hero/>
        <Categories/>
        <Infobox/>
        <Footer/>
        </>
        }
        />
        <Route
        path='/shop'
        element={
          <>
          <Header/>
          <Banner/>
          <FilterBar/>
          <Infobox/>
          <Footer/>
          </>
        }
        />
      </Routes>
    </Router>
  )
}

export default App

import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Infobox from './components/Infobox';
import Footer from './components/Footer';
import Banner from './components/Banner';
import FilterBar from './components/FilterBar';
import Categories from './components/Categories';
import Products from './components/Products';
import SingleProduct from './components/SingleProduct';

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
        <Products limit={8} showTitle={true}/>
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
          <Products limit={16} showTitle={false}/>
          <Infobox/>
          <Footer/>
          </>
        }
        />
        <Route
        path='/product/:id'
        element={
          <>
          <Header/>
          <SingleProduct/>
          <Footer/>
          </>
        }
        />
      </Routes>
    </Router>
  )
}

export default App

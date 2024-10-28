import React, { useEffect, useState } from 'react';
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
import CategoriesProducts from './components/CategoriesProducts';

interface Product {
    id: number;
    name: string;
    description?: string;
    price: number;
    discountPrice: number | null;
    isNew: boolean;
    imageLink: string;
}

const App: React.FC = () => {

  const [filters, setFilters] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<"price-low-high" | "price-high-low" | "Default">('Default');
  const [filteredProducts, setFiltersProducts] = useState<Product[]>([]);
  const [limit, setLimit] = useState<number>(16);
 
  const handleFilterChange = (
    showDiscountedOnly: boolean,
    sortOrder: "price-low-high" | "price-high-low" | "Default"
  ) => {
    const updatedFilters = showDiscountedOnly ? ["discounted"] : [];
    setFilters(updatedFilters);

    setSortOrder(sortOrder);
  }

  const handleLimitChange = (newLimit: number) => {
    setLimit(newLimit);
  }

  useEffect(() => {
    const fetchFilteredProducts = async () => {
      const response = await fetch(`http://localhost:3000/product`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ filters, sortOrder, limit }),
      });
      const data: Product[] = await response.json();
      setFiltersProducts(data);
        };
        fetchFilteredProducts();
      }, [filters, sortOrder, limit]);

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
        <Products limit={4} showTitle={true}/>
        <Infobox/>
        <Footer/>
        </>
        }
        />
        <Route
        path='/shop/category/:id'
        element={<CategoriesProducts />}
        />
        <Route
        path='/shop'
        element={
          <>
          <Header/>
          <Banner/>
          <FilterBar 
          onFilterChange={handleFilterChange}
          onLimitChange={handleLimitChange}
          />
          <Products products={filteredProducts}  limit={limit} showTitle={false}/>
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

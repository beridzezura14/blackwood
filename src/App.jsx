import { useState } from "react";
import { productList } from "./components/AllProduct";
import Header from "./components/Header"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./components/pages/home";
import Product from "./components/pages/product";
import './components/style.scss'
import './main.scss'

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const clearList = () => {
    setSearchTerm(''); 
  }

  const filteredProducts = productList.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>

      <Router>
        <Header 
                productList={productList} 
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm} 
                filteredProducts={filteredProducts} 
                clearList={clearList}
          />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Product" element={<Product />} />


        </Routes>
      </Router>
    </>
  )
}

export default App

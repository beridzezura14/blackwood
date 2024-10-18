import { useState, useEffect } from "react";
import { productList } from "./components/AllProduct";
import Header from "./components/Header"
import Home from "./components/pages/home";
import Footer from "./components/Footer";
import Product from "./components/pages/product";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // სიმულაცია საიტის ჩატვირთვისთვის (მაგალითად, მონაცემების API-დან მოპოვება)
    setTimeout(() => {
      setLoading(false); // როცა საიტი ჩაიტვირთება, loading იქნება false
    }, 1000); // 1 წამი, აქ შეგიძლია დააყენო შენი რეალური დატვირთვის დრო
  }, []);

  if (loading) {
    return <h2 className="loading">Loading <span style={{color: "#b9a16b"}}> ...</span></h2>;
  }

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
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />}/>
          <Route path="/Product" element={<Product />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App

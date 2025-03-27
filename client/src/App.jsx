import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import ProductList from './components/ProductList';
import ProductDetails from './routes/ProductDetails';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard'; // ✅ Import Dashboard
import Header from './components/Header'; 
import './App.css';

function App() {
  return (
    <div>
      {/* ✅ Header is part of layout, not a route */}
      <Header />  

      <h1>My E-commerce App</h1>

      {/* ✅ Navigation links */}
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/products">Products</Link> | 
        <Link to="/register">Register</Link> | 
        <Link to="/login">Login</Link> | 
        <Link to="/dashboard">Dashboard</Link> |
        {/* Example category links */}
        <Link to={`/category/${encodeURIComponent('dj controllers')}`}>DJ Controllers</Link> | 
        <Link to={`/category/${encodeURIComponent('dj booth')}`}>DJ Booths</Link> | 
        <Link to={`/category/${encodeURIComponent('lights')}`}>Lights</Link> | 
<       Link to={`/category/${encodeURIComponent('speakers')}`}>Speakers</Link>

      </nav>

      {/* ✅ Define routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:productId" element={<ProductDetails />} /> {/* Display specific product details */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* ✅ Dashboard route */}
        {/* Category route */}
        <Route path="/category/:category" element={<ProductList />} /> {/* Fetch products by category */}
      </Routes>
    </div>
  );
}

export default App;

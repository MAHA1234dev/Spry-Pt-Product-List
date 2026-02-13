import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Products from './features/products';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<Products />} />
      </Routes>
  )
}

export default App

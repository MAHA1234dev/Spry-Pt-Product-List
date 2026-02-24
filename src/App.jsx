import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import "./App.css";
import Products from "./features/products";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Layout>
  );
}

export default App

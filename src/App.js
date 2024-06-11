import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import EditStock from "./components/EditStock"; 
import Dashboard from "./components/Dashboard"; 
import CreateStock from "./components/CreateStock"; 
import StockList from "./components/StockList";
import NotFound from "./components/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <div className="App">
        <ToastContainer autoClose={3000} />
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create-stock" element={<CreateStock />} />
          <Route path="/edit-stock/:id" element={<EditStock />} />
          <Route path="/stock-list" element={<StockList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

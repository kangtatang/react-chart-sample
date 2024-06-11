import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./Common.css";

const StockList = () => {
  const navigate = useNavigate();
  const [stocks, setStocks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchStocks();
  }, []);

  const fetchStocks = async () => {
    try {
      const response = await axios.get("http://localhost:3009/stocks");
      setStocks(response.data);
    } catch (error) {
      console.error("Error fetching stocks:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this stock?")) {
      try {
        await axios.delete(`http://localhost:3009/stocks/${id}`);
        fetchStocks(); // Refresh the list after deleting
        toast.success("Stock deleted successfully!");
      } catch (error) {
        console.error("Error deleting stock:", error);
        toast.error("Failed to delete stock.");
      }
    }
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="title">
        <h1 style={{ margin: "auto", textAlign: "center", marginTop: "30px" }}>
          Stock Management System
        </h1>
      </div>
      <div className="table-container">
        <input
          type="text"
          className="input-search"
          placeholder="Search Data..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Link to="/create-stock" className="add-link">
          Add New Stock
        </Link>
        <div
          style={{
            padding: "20px",
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "0 0 10px 0 rgba(0,0,0,0.3)",
            marginBottom: "20px",
          }}
        >
          <table className="table">
            <thead>
              <tr>
                <th>Company</th>
                <th>Ticker</th>
                <th>Stock Price</th>
                <th>Time Elapsed</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {stocks
                .filter((stock) =>
                  stock.company.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((stock) => (
                  <tr key={stock.id}>
                    <td>{stock.company}</td>
                    <td>{stock.ticker}</td>
                    <td>{stock.stockPrice}</td>
                    <td>{stock.timeElapsed}</td>
                    <td>
                      <Link
                        to={`/edit-stock/${stock.id}`}
                        style={{ marginRight: "10px" }}
                      >
                        Edit
                      </Link>
                      <button onClick={() => handleDelete(stock.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div>
          <button
            onClick={handleHome}
            style={{
              backgroundColor: "#000",
              color: "#fff",
              padding: "10px",
              borderRadius: "10px",
              cursor: "pointer",
              width: "100px",
            }}
          >
            Home
          </button>
        </div>
      </div>
    </>
  );
};

export default StockList;

import React from "react";
import BarChart from "./BarChart";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleList = () => {
    navigate("/stock-list");
  };
  return (
    <div>
      <h1 style={{ margin: "auto", textAlign: "center", marginTop: "50px" }}>
        Bar Chart
      </h1>
      <div style={{ width: "800px", margin: "auto" }}>
        <BarChart />
        <hr />
        <div style={{ margin: "auto", textAlign: "center", marginTop: "50px" }}>
          <h3>Ini adalah contoh bar chart menggunakan react ChartJS 2</h3>
          <p>dibuat oleh kangtatang sebagai refferensi belajar. Baca file Readme untuk detail</p>
          <div>
            <button
              onClick={handleList}
              style={{
                backgroundColor: "#000",
                color: "#fff",
                padding: "10px",
                borderRadius: "10px",
                cursor: "pointer",
                width: "100px",
              }}
            >
              Stock List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

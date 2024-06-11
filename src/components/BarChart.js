import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "Stock Price",
        data: [],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        borderColor: "rgba(53, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3009/stocks");
        const stocks = response.data;
        const labels = stocks.map((stock) => stock.company);
        const stockPrices = stocks.map((stock) => stock.stockPrice);

        setData({
          labels: labels,
          datasets: [
            {
              label: "Stock Price in $",
              data: stockPrices,
              backgroundColor: "rgba(53, 162, 235, 0.5)",
              borderColor: "rgba(53, 162, 235, 1)",
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 0 10px 0 rgba(0,0,0,0.3)",
          marginTop: "20px",
        }}
      >
        <Bar data={data} options={{ scales: { y: { beginAtZero: true } } }} />
      </div>
    </>
  );
};

export default BarChart;

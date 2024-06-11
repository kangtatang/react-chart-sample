import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditStock = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState({
    company: "",
    ticker: "",
    stockPrice: "",
    timeElapsed: "",
  });

  useEffect(() => {
    const fetchStock = async () => {
      try {
        const response = await axios.get(`http://localhost:3009/stocks/${id}`);
        setInitialValues({
          company: response.data.company,
          ticker: response.data.ticker,
          stockPrice: response.data.stockPrice,
          timeElapsed: response.data.timeElapsed,
        });
      } catch (error) {
        console.error("Error fetching stock:", error);
      }
    };

    fetchStock();
  }, [id]);

  //   const handleChange = (e) => {
  //     setStock({
  //       ...stock,
  //       [e.target.name]: e.target.value
  //     });
  //   };

  const validationSchema = Yup.object({
    company: Yup.string().required("Company name is required."),
    ticker: Yup.string().required("Ticker is required."),
    stockPrice: Yup.number()
      .positive("Stock price must be greater than 0.")
      .required("Stock price is required."),
    timeElapsed: Yup.string().required("Time elapsed is required."),
  });

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      axios
        .put(`http://localhost:3009/stocks/${id}`, values)
        .then(() => {
          toast.success("Stock updated successfully!");
          navigate("/stock-list");
        })
        .catch((error) => {
          console.error("Error updating stock:", error);
          toast.error('Failed to edit stock.');
        });
    },
  });

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //       await axios.put(`http://localhost:3009/stocks/${id}`, stock);
  //       toast.success('Stock updated successfully!');
  //       navigate('/stock-list');
  //     } catch (error) {
  //       console.error('Error updating stock:', error);
  //       toast.error('Failed to update stock.');
  //     }
  //   };

  const handleCancel = () => {
    navigate("/stock-list");
  };

  return (
    <div className="form-container">
      <h1>Edit Data</h1>
      <form onSubmit={formik.handleSubmit}>
        <label className="input-label" htmlFor="company">
          Company Name
        </label>
        <input
          className="form-input"
          type="text"
          name="company"
          id="company"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.company}
          required
        />
        {formik.touched.company && formik.errors.company && (
          <div>{formik.errors.company}</div>
        )}

        <label className="input-label" htmlFor="ticker">
          Ticker Symbol
        </label>
        <input
          className="form-input"
          type="text"
          name="ticker"
          id="ticker"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.ticker}
          required
        />
        {formik.touched.ticker && formik.errors.ticker && (
          <div>{formik.errors.ticker}</div>
        )}

        <label className="input-label" htmlFor="stockPrice">
          Stock Price
        </label>
        <input
          className="form-input"
          type="number"
          name="stockPrice"
          id="stockPrice"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.stockPrice}
          required
        />
        {formik.touched.stockPrice && formik.errors.stockPrice && (
          <div>{formik.errors.stockPrice}</div>
        )}

        <label className="input-label" htmlFor="timeElapsed">
          Time Elapsed
        </label>
        <input
          className="form-input"
          type="text"
          name="timeElapsed"
          id="timeElapsed"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.timeElapsed}
          required
        />
        {formik.touched.timeElapsed && formik.errors.timeElapsed && (
          <div>{formik.errors.timeElapsed}</div>
        )}

        <button type="submit" className="form-button">
          Update Stock
        </button>
        <button
          type="button"
          onClick={handleCancel}
          className="form-button"
          style={{ marginTop: "10px" }}
        >
          Batal
        </button>
      </form>
    </div>
  );
};

export default EditStock;

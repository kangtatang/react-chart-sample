import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Common.css';

const validationSchema = Yup.object({
  company: Yup.string().required("Company name is required."),
  ticker: Yup.string().required("Ticker is required."),
  stockPrice: Yup.number().positive("Stock price must be greater than 0.").required("Stock price is required."),
  timeElapsed: Yup.string().required("Time elapsed is required.")
});

const CreateStock = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      company: '',
      ticker: '',
      stockPrice: '',
      timeElapsed: ''
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await axios.post('http://localhost:3009/stocks', values);
        toast.success('Stock added successfully!');
        navigate('/stock-list');
      } catch (error) {
        console.error('Error adding stock:', error);
        toast.error('Failed to add stock.');
      }
    }
  });

  return (
    <div className="form-container">
        <h1>Tambah Data</h1>
      <form onSubmit={formik.handleSubmit}>
        <label className="input-label" htmlFor="company">Company Name</label>
        <input
          className="form-input"
          type="text"
          name="company"
          id="company"
          value={formik.values.company}
          onChange={formik.handleChange}
          placeholder="Company Name"
          required
        />
        {formik.touched.company && formik.errors.company && <div>{formik.errors.company}</div>}
        <label className="input-label" htmlFor="ticker">Ticker Symbol</label>
        <input
          className="form-input"
          type="text"
          name="ticker"
          id="ticker"
          value={formik.values.ticker}
          onChange={formik.handleChange}
          placeholder="Ticker Symbol"
          required
        />
        {formik.touched.ticker && formik.errors.ticker && <div>{formik.errors.ticker}</div>}
        <label className="input-label" htmlFor="stockPrice">Stock Price</label>
        <input
          className="form-input"
          type="number"
          name="stockPrice"
          id="stockPrice"
          value={formik.values.stockPrice}
          onChange={formik.handleChange}
          placeholder="Stock Price"
          required
        />
        {formik.touched.stockPrice && formik.errors.stockPrice && <div>{formik.errors.stockPrice}</div>}
        <label className="input-label" htmlFor="timeElapsed">Time Elapsed</label>
        <input
          className="form-input"
          type="text"
          name="timeElapsed"
          id="timeElapsed"
          value={formik.values.timeElapsed}
          onChange={formik.handleChange}
          placeholder="Time Elapsed"
          required
        />
        {formik.touched.timeElapsed && formik.errors.timeElapsed && <div>{formik.errors.timeElapsed}</div>}
        <button type="submit" className="form-button">Add Stock</button>
        <button type="button" onClick={() => navigate('/stock-list')} className="form-button" style={{marginTop:'10px'}}>Cancel</button>
      </form>
    </div>
  );
};

export default CreateStock;

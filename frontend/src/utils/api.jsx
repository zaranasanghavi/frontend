import axios from "axios";

const API = axios.create({
  baseURL:  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000/api",
  headers: { "Content-Type": "application/json" }
});

export default API;

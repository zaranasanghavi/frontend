import axios from "axios";

const API = axios.create({
  baseURL: "https://backend-3uy2.onrender.com/api",
  headers: { "Content-Type": "application/json" }
});

export default API;

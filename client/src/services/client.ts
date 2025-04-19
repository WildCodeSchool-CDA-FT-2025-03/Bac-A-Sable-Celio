import axios from "axios";

//http://localhost:4000/api

const client = axios.create({
  // baseURL: `${import.meta.env.VITE_API_SERVER}/api`,
  baseURL: "http://localhost:4000/api",
});
export default client;

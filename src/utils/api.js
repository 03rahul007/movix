import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_TOKEN;
const headers = {
  // Authorization: "Bearer  " + TMDB_TOKEN,
  Authorization: `Bearer ${TMDB_TOKEN}`,

  accept: "application/json",
};
export const fetchDataFromAPI = async (url, params) => {
  try {
    const {data} = await axios.get(`${BASE_URL}${url}`, {
      headers,
      params,
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
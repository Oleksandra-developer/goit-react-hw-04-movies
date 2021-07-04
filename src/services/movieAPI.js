import axios from "axios";

const API_KEY = "489be23e319625eb8b94d8ed3b868cac";
const BASE_URL = "https://api.themoviedb.org/3";

const moviesAPI = ({ searchQuery = "", page = 10 }) => {
  return axios
    .get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}&page=${page}`
    )
    .then((response) => response.data.results);
  // .then(console.log(response.data.results));
};

export default moviesAPI;

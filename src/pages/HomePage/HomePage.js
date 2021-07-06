/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import axios from "axios";
import MoviesList from "../../components/MovieList/MovieList";
import { API_KEY, BASE_URL } from "../../components/variables";
import styles from "../../styles.css";

class HomePage extends Component {
  state = {
    trendingMovies: [],
  };
  async componentDidMount() {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
    );
    this.setState({ trendingMovies: response.data.results });
  }
  render() {
    return (
      <>
        <h1 className="page-title">Tranding movies</h1>
        <MoviesList movies={this.state.trendingMovies} />
      </>
    );
  }
}

// HomePage.propTypes = {
//   id: PropTypes.string.isRequired,
//   title: PropTypes.string,
//   poster_path: PropTypes.string.isRequired,
//   overview: PropTypes.string,
// };
export default HomePage;

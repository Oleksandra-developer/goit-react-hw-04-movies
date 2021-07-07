/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchBar from "../../components/SearchBar/SearchBar";
import moviesAPI from "../../services/movieAPI";
import styles from "../../styles.css";
import MoviesList from "../../components/MovieList/MovieList";

class MoviePage extends Component {
  state = {
    searchQuery: "",
    movies: [],
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchMovies();
    }
  }
  onChangeQuery = (query) => {
    this.setState({
      searchQuery: query,
      movies: [],
      error: null,
    });
  };
  fetchMovies = () => {
    console.log("fetchMovies", this.state.searchQuery);
    const { searchQuery, movies, error } = this.state;

    return moviesAPI({ searchQuery, movies, error })
      .then((movies) =>
        this.setState(() => ({
          movies: [...movies],
          error: error,
        }))
      )
      .catch((error) => console.log(error));
  };
  render() {
    return (
      <>
        <h1 className="page-title">Search movies</h1>
        <SearchBar onSubmit={this.onChangeQuery} />

        <MoviesList movies={this.state.movies} />
      </>
    );
  }
}

MoviePage.propTypes = {
  searchQuery: PropTypes.string,
  movies: PropTypes.array,
};
export default MoviePage;

/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";
import moviesAPI from "../services/movieAPI";
import styles from "../styles.css";

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
    const { searchQuery, movies } = this.state;

    return moviesAPI({ searchQuery, movies })
      .then((movies) =>
        this.setState(() => ({
          movies: [...movies],
        }))
      )
      .catch((error) => this.setState({ error }));
  };
  render() {
    return (
      <>
        <h1 className="page-title">Search movies</h1>
        <SearchBar onSubmit={this.onChangeQuery} />
        {this.state.movies.length !== 0 ? (
          <ul>
            {this.state.movies.map((movie) => (
              <li key={movie.id}>
                <Link to={`${this.props.match.url}/${movie.id}`}>
                  {movie.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <h2>Sorry, no results</h2>
        )}
      </>
    );
  }
}

export default MoviePage;

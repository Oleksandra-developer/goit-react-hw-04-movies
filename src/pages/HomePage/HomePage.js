/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { halfImgUrl, API_KEY, BASE_URL } from "../../components/variables";
import styles from "./HomePage.module.css";

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
        <h1 className={styles.pageTitle}>Tranding movies</h1>

        <ul className={styles.trandingMoviesList}>
          {this.state.trendingMovies.map(
            ({ id, title, poster_path, overview }) => (
              <li key={id} className={styles.trandingMoviesListItem}>
                <Link to={`/movies/${id}`}>
                  <div>
                    <img
                      className={styles.moviePoster}
                      src={`${halfImgUrl}${poster_path}`}
                      alt={title}
                    />
                    <p className={styles.movieTitle}>{title}</p>
                    <p className={styles.movieDecription}>{overview}</p>
                  </div>
                </Link>
              </li>
            )
          )}
        </ul>
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

import React, { Component } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import { halfImgUrl, API_KEY, BASE_URL } from "../components/variables";
import styles from "../styles.css";

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
    console.log(this.props);
    return (
      <>
        <h1 className="page-title">Tranding movies</h1>

        <ul className="tranding-movies_list">
          {this.state.trendingMovies.map(
            ({ id, title, poster_path, overview }) => (
              // <Link to={`${this.props.match.url}/${id}`}>
              <li key={id} className="tranding-movies_list-item">
                <img
                  className="movie-poster"
                  src={`${halfImgUrl}${poster_path}`}
                  alt={title}
                />
                <p className="movie-title">{title}</p>
                <p className="movie-decription">{overview}</p>
              </li>
              // </Link>
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

import React, { Component } from "react";
import axios from "axios";
import { Route, NavLink, Switch } from "react-router-dom";
import Cast from "../components/Cast";
import Reviews from "../components/Reviews";
import {
  halfImgUrl,
  API_KEY,
  BASE_URL,
  defaultSrc,
} from "../components/variables";
import styles from "../styles.css";

class MovieDetailsPage extends Component {
  state = {
    id: null,
    popularity: null,
    title: null,
    overview: null,
    backdrop_path: null,
  };
  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
    );
    this.setState({ ...response.data });
  }
  render() {
    const { title, popularity, overview, backdrop_path, id } = this.state;
    return (
      <>
        {{ title } ? <h1 className="page-title">"{title}": details</h1> : null}
        <div className="details-movie-card">
          <img
            className="movie-poster"
            src={backdrop_path ? `${halfImgUrl}${backdrop_path}` : defaultSrc}
            alt={title}
          />
          <div className="movie-decription">
            <p>Popularity: {popularity}</p>
            <p className="movie-overview">{overview}</p>
          </div>
        </div>
        {/* Navigation-2 */}
        <ul>
          <li>
            <NavLink
              exact
              to={`/movies/${id}/cast`}
              className="NavLink"
              activeClassName="NavLink--active"
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to={`/movies/${id}/reviews`}
              className="NavLink"
              activeClassName="NavLink--active"
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/movies/:movieId/cast" component={Cast} />
          <Route path="/movies/:movieId/reviews" component={Reviews} />
        </Switch>
      </>
    );
  }
}

export default MovieDetailsPage;

/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Route, NavLink, Switch } from "react-router-dom";
import { Suspense, lazy } from "react";
import {
  halfImgUrl,
  API_KEY,
  BASE_URL,
  defaultSrc,
} from "../../components/variables";
import styles from "../../styles.css";

const Cast = lazy(() => import("../../components/Cast/Cast.js"));
const Reviews = lazy(() => import("../../components/Reviews/Reviews.js"));

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
  onGoBack = () => {
    const { location, history } = this.props;
    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    history.push({
      pathname: "/",
    });
  };
  render() {
    const { title, popularity, overview, backdrop_path, id } = this.state;

    return (
      <>
        <button type="button" className="button" onClick={this.onGoBack}>
          Go back
        </button>

        <h1 className="page-title">"{title}": details</h1>
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
        <Suspense fallback={<h1>Downloading...</h1>}>
          <Switch>
            <Route path="/movies/:movieId/cast" component={Cast} />
            <Route path="/movies/:movieId/reviews" component={Reviews} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

MovieDetailsPage.propTypes = {
  id: PropTypes.string,
  popularity: PropTypes.string,
  title: PropTypes.string,
  overview: PropTypes.string,
  backdrop_path: PropTypes.string,
};
export default MovieDetailsPage;

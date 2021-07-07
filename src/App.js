/* eslint-disable no-unused-vars */
import { Suspense, lazy } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import styles from "./styles.css";

const HomePage = lazy(
  () =>
    import("./pages/HomePage/HomePage.js") /* webpackChunkName: "home-page" */
);
const MoviesPage = lazy(
  () =>
    import(
      "./pages/MoviePage/MoviesPage.js"
    ) /* webpackChunkName: "movies-page" */
);
const MovieDetailsPage = lazy(() =>
  import(
    "./pages/MovieDetailsPage/MovieDetailsPage.js" /* webpackChunkName: "movie-details" */
  )
);

const App = () => (
  <div className="container">
    <ul className="main_nav">
      <li className="main_nav-item">
        <NavLink
          exact
          to="/"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Home
        </NavLink>
      </li>
      <li className="main_nav-item">
        <NavLink
          exact
          to="/movies"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Search movies
        </NavLink>
      </li>
    </ul>
    <Suspense fallback={<h1>Downloading...</h1>}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </div>
);

export default App;

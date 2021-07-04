import "./App.css";
import { Route, NavLink, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import styles from "./styles.css";

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

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/movies" component={MoviesPage} />
      <Route path="/movies/:movieId" component={MovieDetailsPage} />
    </Switch>
  </div>
);

export default App;

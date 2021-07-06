import React from "react";
import { Link, withRouter } from "react-router-dom";
// import styles from "../../styles.css";

const MoviesList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <Link
          to={{
            pathname: `/movies/${id}`,
            state: {
              from: location,
            },
          }}
        >
          <li key={id}>{title}</li>
        </Link>
      ))}
    </ul>
  );
};
export default withRouter(MoviesList);

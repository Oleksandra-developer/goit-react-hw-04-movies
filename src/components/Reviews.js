import React, { Component } from "react";
import axios from "axios";
import { API_KEY, BASE_URL } from "./variables.js";

class Reviews extends Component {
  state = {
    reviews: [],
  };
  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
    );
    this.setState({ reviews: response.data.results });
  }
  render() {
    const { reviews } = this.state;
    return (
      <>
        <h1 className="page-title">Reviews</h1>
        {reviews.length !== 0 ? (
          <ul>
            {reviews.map(({ id, content, author }) => (
              <li key={id}>
                <p>{content}</p>
                <p>{author}</p>
              </li>
            ))}
          </ul>
        ) : (
          <h3>No any rewievs </h3>
        )}
      </>
    );
  }
}
export default Reviews;

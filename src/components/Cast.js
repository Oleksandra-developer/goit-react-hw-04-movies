import React, { Component } from "react";
import axios from "axios";
import { halfImgUrl, API_KEY, BASE_URL, defaultSrc } from "./variables.js";

class Cast extends Component {
  state = {
    artists: [],
  };
  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
    );
    this.setState({ artists: response.data.cast });
  }
  render() {
    return (
      <>
        <h1 className="page-title">Cast</h1>
        <ul className="list-artists">
          {this.state.artists.map(({ id, profile_path, name }) => (
            <li key={id} className="list-artists_item">
              <img
                className="artist-poster"
                src={profile_path ? `${halfImgUrl}${profile_path}` : defaultSrc}
                alt={name}
              />
              <p className="artist-name">{name}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
export default Cast;

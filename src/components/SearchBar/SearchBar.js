import React, { Component } from "react";
import PropTypes from "prop-types";

class SearchBar extends Component {
  state = {
    query: "",
  };
  handleChange = (e) => {
    this.setState({ query: e.currentTarget.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: "" });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="button" onClick={this.handleSubmit}>
            <span>Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};
export default SearchBar;

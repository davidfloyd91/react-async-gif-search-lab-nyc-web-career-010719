import React, { Component, Fragment } from 'react';

export default class GifSearch extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input
          type="text"
          placeholder="Search for a gif"
          onChange={this.props.handleInput}
        />
        <input type="submit" value="Go" />
      </form>
    );
  };
};

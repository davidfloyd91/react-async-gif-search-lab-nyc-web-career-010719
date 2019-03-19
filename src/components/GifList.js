import React, { Component } from 'react';
const uuid = require('react-native-uuid');

export default class GifList extends Component {
  renderGifs = () => {
    return this.props.gifs.map(g => {
      return (
        <li key={uuid()}>
          <img src={g} alt={g} />
        </li>
      );
    });
  };

  render() {
    return (
      <ul>
        {this.renderGifs()}
      </ul>
    );
  };
};

import React, { Component, Fragment } from
'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';
import { API_KEY } from '../key';

export default class GifListContainer extends Component {
  state = {
    query: 'honey badger',
    gifs: [],
  };

  handleInput = e => {
    this.setState({
      query: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      gifs: [],
    }, () => this.fetchGifs());
  };

  componentDidMount = () => {
    this.setState({
      gifs: [],
    }, () => this.fetchGifs());
  };

  fetchGifs = () => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=${API_KEY}&rating=g`)
    .then(r => r.json())
    .then(gifs => {
      gifs.data.forEach(g => {
        this.setState({
          gifs: [...this.state.gifs, g.images.original.url],
        });
      });
    });
  };

  render() {
    return (
      <Fragment>
        <GifSearch
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
        />
        <GifList
          gifs={this.state.gifs}
        />
      </Fragment>
    );
  };
};

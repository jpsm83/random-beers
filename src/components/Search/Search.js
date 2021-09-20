import React, { Component } from 'react';

export default class Search extends Component {
  render() {
    const { handleSearchBeer } = this.props;
    return (
      <div>
        <input
          type="text"
          onChange={handleSearchBeer}
          placeholder="Beers...Search please"
        />
      </div>
    );
  }
}

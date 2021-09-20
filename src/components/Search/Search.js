import React from 'react';

export default function Search({ handleSearchBeer }) {
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
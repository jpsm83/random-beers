import React from 'react';
import { Link } from 'react-router-dom';

export default function BeerItem({
  _id,
  image_url,
  name,
  tagline,
  contributed_by,
}) {
  return (
    <div>
      <Link to={`/beers/${_id}`}>
        <div className="beer-img">
          <img src={image_url} alt={name} />
        </div>
        <div className="beer-detail">
          <h2>{name}</h2>
          <h3>{tagline}</h3>
          <p>{contributed_by}</p>
        </div>
      </Link>
    </div>
  );
}

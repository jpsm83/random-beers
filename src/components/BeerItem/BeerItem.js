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
      <div className="beer-img">
        <Link to={`/beers/${_id}`}>
          <img src={image_url} alt={name} />
        </Link>
      </div>

      <div className="beer-detail">
        <h2>{name}</h2>
        <h3>{tagline}</h3>
        <p>{contributed_by}</p>
      </div>
    </div>
  );
}

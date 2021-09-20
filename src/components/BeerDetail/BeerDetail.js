import React from 'react';

export default function BeerDetail({
  image_url,
  name,
  tagline,
  contributed_by,
  first_brewed,
  description,
}) {
  return (
    <div>
      <div className="beer-detail">
        <img src={image_url} alt={name} />
        <p className="name">{name}</p>
        <p>
          {first_brewed}, , {tagline}
        </p>
        <p className="description">{description}</p>
        <p>{contributed_by}</p>
      </div>
    </div>
  );
}

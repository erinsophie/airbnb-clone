import React from 'react';

function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (props.location === 'Online') {
    badgeText = 'ONLINE';
  }

  return (
    <div className="card">

      <div className="card-image-container">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      
        <img
          src={`/img/${props.coverImg}`}
          alt="experience"
          className="card-image"
        />
        <div className="card-description">{props.description}</div>
      </div>

      <div className="card-stats">
        <img src="/img/star-icon.png" alt="star icon" className="star-icon" />
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>

      <p className="card-title">{props.title}</p>
      <p className="card-price">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}

export default Card;

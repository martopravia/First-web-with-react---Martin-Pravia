import React from "react";

const Card = ({ title, image, description, button }) => {
  return (
    <div className="card h-100">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">
          <button type="button" className="btn btn-primary">
            {button}
          </button>
        </small>
      </div>
    </div>
  );
};

export default Card;

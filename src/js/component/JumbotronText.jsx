import React from "react";

const JumbotronText = ({ title, description, button }) => {
  return (
    <div class="col-md-12 card mb-3 bg-secondary">
      <div class=" card-body">
        <h5 class="card-title display-2">{title}</h5>
        <p class="card-text">{description}</p>
        <a href="#" class="btn btn-primary">
          {button}
        </a>
      </div>
    </div>
  );
};

export default JumbotronText;

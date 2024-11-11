import React from "react";

const Cards = () => {
  return (
    <div className="row row-cols-1  g-4 text-center">
      <div className="col-3">
        <div className="card h-100">
          <img
            src="https://picsum.photos/500/325"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              numquam aliquid sit quaerat enim totam architecto necessitatibus
              iusto consequuntur voluptatem.
            </p>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">
              <button type="button" class="btn btn-primary">
                Find Out More!
              </button>
            </small>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="card h-100">
          <img
            src="https://picsum.photos/500/325"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
              iste dolorem quaerat sint unde similique, vitae delectus cumque
              fugit debitis!
            </p>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">
              <button type="button" class="btn btn-primary">
                Find Out More!
              </button>
            </small>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="card h-100">
          <img
            src="https://picsum.photos/500/325"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatum sed fugiat consectetur? Distinctio aliquid totam sequi
              dignissimos vitae culpa ullam.
            </p>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">
              <button type="button" class="btn btn-primary">
                Find Out More!
              </button>
            </small>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="card h-100">
          <img
            src="https://picsum.photos/500/325"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              voluptates aperiam nostrum laudantium tempore quaerat voluptate
              ullam natus earum assumenda.
            </p>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">
              <button type="button" class="btn btn-primary">
                Find Out More!
              </button>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

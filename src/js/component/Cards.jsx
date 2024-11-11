import React from "react";

const Cards = () => {
  return (
    <div className="row row-cols-1  g-4 text-center mb-4">
      <div className="col-3">
        <div className="card h-100">
          <img
            src="https://picsum.photos/id/16/500/325"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Disfruta del Caribe</h5>
            <p className="card-text">
              Explora playas de arena blanca, aguas cristalinas y una
              experiencia inolvidable. Relájate bajo el sol o sumérgete en
              aventuras únicas. ¡El Caribe te espera!
            </p>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">
              <button type="button" class="btn btn-primary">
                Lo quiero!
              </button>
            </small>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="card h-100">
          <img
            src="https://picsum.photos/id/29/500/325"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Cordillera de los Andes</h5>
            <p className="card-text">
              Sumérgete en paisajes majestuosos, montañas imponentes y
              naturaleza pura. Vive la emoción del trekking, la nieve y el aire
              fresco. ¡La Cordillera te espera!
            </p>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">
              <button type="button" class="btn btn-primary">
                Quiero saber mas!
              </button>
            </small>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="card h-100">
          <img
            src="https://picsum.photos/id/288/500/325"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Estocolmo</h5>
            <p className="card-text">
              Canales encantadores, arquitectura histórica y la vibrante cultura
              escandinava te esperan. Paseá por calles adoquinadas, disfrutá de
              la gastronomía nórdica y viví la esencia de esta ciudad única.
              ¡Comprá tu pasaje y descubrí Estocolmo!
            </p>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">
              <button type="button" class="btn btn-primary">
                Quiero!
              </button>
            </small>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="card h-100">
          <img
            src="https://picsum.photos/id/299/500/325"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">New York</h5>
            <p className="card-text">
              La ciudad que nunca duerme te espera con su energía vibrante.
              Rascacielos imponentes, arte en cada esquina y sabores del mundo
              entero. Paseá por Central Park, viví el Times Square y sentí el
              ritmo de la Gran Manzana. ¡Nueva York te llama, vení a vivirla!
            </p>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">
              <button type="button" class="btn btn-primary">
                Quedan pasajes?
              </button>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

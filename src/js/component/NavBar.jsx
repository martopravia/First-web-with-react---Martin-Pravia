import React from "react";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-dark ">
      <div class="col-md-10 container bg-secondary-subtle m-auto">
        <a class="navbar-brand text-light" href="#">
          Start Bootstrap
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a
                class="nav-link active text-light"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#">
                Services
              </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link text-light" aria-disabled="true">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

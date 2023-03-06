import React from "react";

const Assignment1 = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4">
            Content goes here
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <a className="navbar-brand" href="/">
                  Navbar
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavDropdown"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="/"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        Features
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        Pricing
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="/"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Dropdown link
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdownMenuLink"
                      >
                        <li>
                          <a className="dropdown-item" href="/">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">Content goes here</div>
          <div className="col-sm-12 col-md-6 col-lg-4">Content goes here</div>
        </div>
      </div>
      <div className="d-none d-sm-block d-md-none">
        This content will only be displayed on screens that are small
      </div>
      <div className="d-none d-md-block d-lg-none">
        This content will only be displayed on screens that are medium
      </div>
      <div className="d-none d-lg-block">
        This content will only be displayed on screens that are large or larger
      </div>
      <img src="your-image.jpg" className="img-fluid" alt="Responsiveimage" />
    </>
  );
};

export default Assignment1;



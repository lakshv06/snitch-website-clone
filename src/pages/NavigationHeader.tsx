import { ReactElement } from "react";

function NavHeader(): ReactElement {
  return (
    <div className="p-1">
      <nav className="navbar bg-body-tertiary fixed-top shadow-sm">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">
            <h3 className="heading-style">SNITCH</h3>
          </a>
          <div
            className="offcanvas offcanvas-start"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header border-bottom shadow">
            <a href="/sales-page" className="text-decoration-none">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Click Here for flash deals!
              </h5>
              </a>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item border-bottom">
                  <a className="nav-link active" aria-current="page" href="sign-in">
                    <span className="d-flex flex-row gap-2"><p className="mb-0">Login</p><i className="bi bi-person-circle" style={{color: "grey", fontSize: "1rem"}}></i></span>
                  </a>
                </li>
                <li className="nav-item border-bottom">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                
              </ul>
              <form className="d-flex mt-3" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
          <div className="d-flex flex-row">
            <a href = "/sign-in" className="m-2"><i className="bi bi-person" style={{ fontSize: "1.5rem" , color: "grey"}}></i></a>
            <a href = "" className="m-2"><i className="bi bi-search" style={{ fontSize: "1.5rem", color: "grey"}}></i></a>
            <a href = "" className="m-2"><i className="bi bi-heart" style={{ fontSize: "1.5rem", color: "grey"}}></i></a>
            <a href = "" className="m-2"><i className="bi bi-bag-dash" style={{ fontSize: "1.5rem", color: "grey"}}></i></a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavHeader;

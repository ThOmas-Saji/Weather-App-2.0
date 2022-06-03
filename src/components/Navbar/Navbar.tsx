import { Link } from "react-router-dom";
import { RiHome2Line } from "react-icons/ri";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-dark bg-trasparent fixed-top">
        <div className="container-fluid">
          <h3 className="navbar-brand text-warning">My Weather App <span className="text-info"> 2.0</span></h3>
          <button
            className="navbar-toggler m-1"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            area-aria-controls="offcanvasNavbar"
            area-aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="offcanvas offcanvas-end bg-dark bg-opacity-50 pt-2 px-2"
            tabIndex={-1}
            id="offcanvasNavbar"
          >
            <div className="offcanvas-header">
              <p className="offcanvas-title" id="offcanvasNavbarLabel">
                Hello, welcome to Weather App 2.0
              </p>
              <button
                type="button"
                className="btn-close bg-light"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <div className="btn-group" role="group">
                <button
                  className="btn btn-outline-light"
                  data-bs-dismiss="offcanvas"
                >
                  {" "}
                  <Link
                    className="text-decoration-none text-reset"
                    to="/signup"
                  >
                    Signup
                  </Link>
                </button>
                <button className="btn btn-light" data-bs-dismiss="offcanvas">
                  {" "}
                  <Link className="text-decoration-none text-reset" to="/login">
                    Login
                  </Link>
                </button>
              </div>
              <span className="mx-5" data-bs-dismiss="offcanvas">
                <Link className="text-decoration-none text-reset" to="/">
                  <RiHome2Line style={{ fontSize: "25px" }}></RiHome2Line>
                </Link>
              </span>
              <h5 className="mt-5">About</h5>
              <p className="fw-light font-monospace text-secondary"><span className="text-info"> 2022 @</span> Thomas Saji  </p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

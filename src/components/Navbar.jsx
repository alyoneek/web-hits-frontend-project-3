import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow">
      <div className="container-fluid mx-4">
        <a class="navbar-brand" href="/">
          Блог №415
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Главная
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Авторы
              </a>
            </li>
          </ul>
          <div className="nav-item dropdown">
            <span
              className="nav-link dropdown-toggle"
              id="navbarScrollingDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              Имя
            </span>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarScrollingDropdown">
              <li>
                <a className="dropdown-item" href="/">
                  Профиль
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Выход
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

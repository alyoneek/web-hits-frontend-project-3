import React from 'react';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light shadow">
      <div class="container-fluid mx-4">
        <a class="navbar-brand" href="/">
          Блог №415
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">
                Главная
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Авторы
              </a>
            </li>
          </ul>
          <div class="nav-item dropdown">
            <span
              class="nav-link dropdown-toggle"
              id="navbarScrollingDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              Имя
            </span>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarScrollingDropdown">
              <li>
                <a class="dropdown-item" href="/">
                  Профиль
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/">
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

import React from 'react';

const LoginCard = () => {
  return (
    <div class="card w-50 shadow" style={{ height: 'fit-content' }}>
      <div class="card-body p-4">
        <h1 class="mb-4">Вход</h1>

        <div class="form-outline mb-4">
          <label class="form-label" for="email">
            Email
          </label>
          <input type="email" name="email" id="email" class="form-control form-control-lg" />
        </div>

        <div class="mb-4">
          <label class="form-label" for="password">
            Пароль
          </label>
          <input
            type="password"
            name="password"
            id="password"
            class="form-control form-control-lg"
          />
        </div>

        <div class="d-grid gap-2">
          <button class="btn btn-primary btn-lg mb-1" type="submit">
            Войти
          </button>
          <button class="btn btn-secondary btn-lg mb-1" type="submit">
            Зарегистрироваться
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;

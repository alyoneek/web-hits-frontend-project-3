import React from 'react';

const RegisterCard = () => {
  return (
    <div class="card w-50 shadow" style={{ height: 'fit-content' }}>
      <div class="card-body p-4">
        <h1 class="mb-4">Регистрация</h1>

        <div class="form-outline mb-4">
          <label class="form-label" for="fullName">
            ФИО
          </label>
          <input type="text" name="fullName" id="fullName" class="form-control form-control-lg" />
        </div>

        <div class="mb-4">
          <label class="form-label" for="birthDate">
            Дата рождения
          </label>
          <input type="date" name="birthDate" id="birthDate" class="form-control form-control-lg" />
        </div>

        <div class="mb-4">
          <label class="form-label" for="gender">
            Пол
          </label>
          <select
            id="gender"
            class="form-select form-select-lg"
            aria-label="Default select example">
            <option value="Male" selected>
              Мужской
            </option>
            <option value="Female">Женский</option>
          </select>
        </div>

        <div class="mb-4">
          <label class="form-label" for="phoneNumber">
            Телефон
          </label>
          <input
            type="text"
            placeholder="+7 (xxx) xxx-xx-xx"
            name="phoneNumber"
            id="phoneNumber"
            class="form-control form-control-lg"
          />
        </div>

        <div class="mb-4">
          <label class="form-label" for="email">
            Email
          </label>
          <input type="email" name="email" id="email" class="form-control form-control-lg" />
        </div>

        <div class="mb-4">
          <label class="form-label" for="password">
            Пароль
          </label>
          <input name="password" id="password" class="form-control form-control-lg" />
        </div>

        <div class="d-grid gap-2">
          <button class="btn btn-primary btn-lg mb-1" type="submit">
            Зарегистрироваться
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterCard;

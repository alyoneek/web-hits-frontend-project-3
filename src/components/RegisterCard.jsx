import React from 'react';

const RegisterCard = () => {
  return (
    <div className="card w-50 shadow" style={{ height: 'fit-content' }}>
      <div className="card-body p-4">
        <h1 className="mb-4">Регистрация</h1>

        <div className="form-outline mb-4">
          <label className="form-label" for="fullName">
            ФИО
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            className="form-control form-control-lg"
          />
        </div>

        <div className="mb-4">
          <label className="form-label" for="birthDate">
            Дата рождения
          </label>
          <input
            type="date"
            name="birthDate"
            id="birthDate"
            className="form-control form-control-lg"
          />
        </div>

        <div className="mb-4">
          <label className="form-label" for="gender">
            Пол
          </label>
          <select
            id="gender"
            className="form-select form-select-lg"
            aria-label="Default select example">
            <option value="Male" selected>
              Мужской
            </option>
            <option value="Female">Женский</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="form-label" for="phoneNumber">
            Телефон
          </label>
          <input
            type="text"
            placeholder="+7 (xxx) xxx-xx-xx"
            name="phoneNumber"
            id="phoneNumber"
            className="form-control form-control-lg"
          />
        </div>

        <div className="mb-4">
          <label className="form-label" for="email">
            Email
          </label>
          <input type="email" name="email" id="email" className="form-control form-control-lg" />
        </div>

        <div className="mb-4">
          <label className="form-label" for="password">
            Пароль
          </label>
          <input name="password" id="password" className="form-control form-control-lg" />
        </div>

        <div className="d-grid gap-2">
          <button className="btn btn-primary btn-lg mb-1" type="submit">
            Зарегистрироваться
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterCard;

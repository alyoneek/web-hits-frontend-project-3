import React from 'react';

const ProfileCard = () => {
  return (
    <div className="card w-100 shadow" style={{ height: 'fit-content' }}>
      <div className="card-body p-4">
        <h1 className="mb-5">Профиль</h1>

        <div className="row mb-4">
          <label className="col form-label" for="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="col form-control form-control-lg"
          />
        </div>

        <div className="row mb-4">
          <label className="form-label col" for="fullName">
            ФИО
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            className="form-control form-control-lg col"
          />
        </div>

        <div className="row mb-4">
          <label className="col form-label" for="phoneNumber">
            Номер телефона
          </label>
          <input
            type="text"
            placeholder="+7 (xxx) xxx-xx-xx"
            name="phoneNumber"
            id="phoneNumber"
            className="col form-control form-control-lg"
          />
        </div>

        <div className="row mb-4">
          <label className="col form-label" for="gender">
            Пол
          </label>
          <select
            id="gender"
            className="col form-select form-select-lg px-3"
            aria-label="Default select example">
            <option value="Male" selected>
              Мужской
            </option>
            <option value="Female">Женский</option>
          </select>
        </div>

        <div className="row mb-4">
          <label className="col form-label" for="birthDate">
            Дата рождения
          </label>
          <input
            type="date"
            name="birthDate"
            id="birthDate"
            className="col form-control form-control-lg"
          />
        </div>

        <div className="d-flex flex-row-reverse">
          <button className="btn btn-primary btn-lg mb-1" type="submit">
            Редактировать
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

//Form index.js

import React, { useEffect } from "react";
import { useState } from "react";

function Index() {
  const [form, setForm] = useState({ fullName: "", number: "" });

  const formInputChanged = (e) => {
    setForm({ ...form, [e.target.name] : e.target.value });
  };

  const formSubmit = (e) => {
    e.preventDefault();

    console.log(form); //Böylece butona basıldığında bize form'u consola yazdırsın.
  };

  return (
    <>
      <div className="container">
        <form onSubmit={formSubmit}>
          <div className="input-group  mb-3">
            <label
              htmlFor="tbxFullName"
              className="input-group-prepend input-group-text"
            >
              Person :
            </label>
            <input
              name="fullName"
              id="tbxFullName"
              type="text"
              placeholder="Full Name"
              onChange={formInputChanged}
              className=" form-control input-group-append"
            />
          </div>

          <div className="input-group  mb-3">
            <label
              htmlFor="tbxNumber"
              className="input-group-prepend input-group-text"
            >
              Number :
            </label>
            <input
              name="number"
              id="tbxNumber"
              type="text"
              placeholder="0555 555 55 55"
              onChange={formInputChanged}
              className="form-control input-group-append"
            />
          </div>

          <div className="btn-group-sm float-right">
            <button type="submit" className="btn-lg btn-primary mr-1">
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Index;

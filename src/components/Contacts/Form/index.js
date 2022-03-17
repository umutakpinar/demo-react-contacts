//Form index.js

import React from "react";
import { useState } from "react";

function Index() {
  const [form, setForm] = useState({});

  return (
    <>
      <div className="container">
        <form>
          <div className="input-group  mb-3">
            <label
              htmlFor="tbxFullName"
              className="input-group-prepend input-group-text"
            >
              Person :
            </label>
            <input
              id="tbxFullName"
              type="text"
              placeholder="Full Name"
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
              id="tbxNumber"
              type="text"
              placeholder="0555 555 55 55"
              className="form-control input-group-append"
            />
          </div>

          <div className="btn-group-sm float-right">
            <button className="btn-lg btn-primary mr-1">Add</button>
            <button className="btn-lg btn-danger">Remove</button>
          </div>

        </form>
      </div>
    </>
  );
}

export default Index;

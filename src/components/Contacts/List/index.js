//List index.js
import { useState } from "react";

function Index({ contacts }) {
  const [searchText, setSearchText] = useState(String);

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key].toLowerCase().includes(searchText.toLowerCase());
    });
  });

  return (
    <div className="container">
      <hr />
      <h3 className="p-3">Contacts List</h3>
      <div className="container my-3 p-3 shadow bg-light rounded border input-group">
        <label
          className="input-group-text input-group-prepend"
          htmlFor="tbxSearch"
        >
          Search Bar
        </label>
        <input
          id="tbxSearch"
          type="text"
          className="form-control input-group-append"
          placeholder="Search Person or Number..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
      </div>

      <div className="container bg-light border shadow p-3 my-3 rounded">
        <h4>{contacts.length} person : {filtered.length} founded</h4>
        <ul className="list-unstyled">
          {filtered.map((contact, index) => (
            <li className="p-2 m-1 border rounded hoverBlue" key={index}>
            {contact.fullName} : {contact.number}
          </li>
          ))}
        </ul>
      </div>
      <hr />
    </div>
  );
}

export default Index;

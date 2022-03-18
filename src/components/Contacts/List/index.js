//List index.js
import React from "react";

function Index({contacts}) {
  return (
    <div className="container">
      <hr />
      <h3 className="p-3">Contacts List</h3>
      <div className="container bg-light border shadow p-3 my-3 rounded">
        <ul>
            {contacts.map((contact, index) => <li key={index}>{contact.fullName} {contact.number}</li>)}
        </ul>
      </div>
      <hr />
    </div>
  );
}

export default Index;
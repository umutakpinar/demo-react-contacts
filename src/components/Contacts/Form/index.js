//Form index.js

import React, { useEffect } from "react";
import { useState } from "react";

function Index( {addContact, contacts} ) {
  const [form, setForm] = useState({ fullName: "", number: "" });

  const formInputChanged = (e) => {
    setForm({ ...form, [e.target.name] : e.target.value }); //Buradaki [e.target.name] ile (yani Input'un anme değişkeni) fullName state'i ile aynı olmalı
  };

  const formSubmit = (e) => {
    e.preventDefault();

    if(form.fullName === "" || form.number === "") { //Buradaki if kontrolü ile form'un boş olup olmadığını kontrol ediyoruz
      alert("Please fill all the fields");
      return false; // formu göndermeni engelliyor herhangi biri boş değilse devam ediyor
    }

    addContact([...contacts, form]); //formu addContact prop'una gönderiyoruz, ki addContact prop'u Contacs Componetni içerisindeki contacts state'ine atıyor. (setContacts fonksiyonu). Contacts bir dizi olduğu için dizi olarak gönderdim! [] kapalı aprantezlere dikkat!  
    console.log("Form'u addContact propuna gönderdim.")
    console.log(form); //Böylece butona basıldığında bize form'u consola yazdırsın.
    btnAddClearInputs(); //Butona basıldığında formu temizleme işlemi yapıyor.
  };

  const btnAddClearInputs = (e) =>{
    setForm({fullName: "", number: ""}); //Butona basıldığında formu temizliyoruz.
  }

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
              value={form.fullName}
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
              value={form.number}
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

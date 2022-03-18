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

    if(form.fullName == "" || form.number == "") { //Buradaki if kontrolü ile form'un boş olup olmadığını kontrol ediyoruz
      alert("Please fill all the fields");
      return false; // formu göndermeni engelliyor
    }

    addContact(...contacts, form); //formu addContact prop'una gönderiyoruz, ki addContact prop'u Contacs Componetni içerisindeki contacts state'ine atıyor. (setContacts fonksiyonu)
    console.log("Form'u addContact propuna gönderdim.")
    console.log(form); //Böylece butona basıldığında bize form'u consola yazdırsın.
    form.fullName = ""; //Buradaki form.fullName = "" ile form'un fullName değişkenini boş yapıyoruz. Böylece state'de tutulan bilgi siliniyor.
    form.number = ""; //Buradaki form.number = "" ile form'un number değişkenini boş yapıyoruz. Böylece state'de tutulan bilgi siliniyor.
  };

  const btnAddClearInputs = (e) =>{
    document.getElementById("tbxFullName").value = ""; //UI'daki girdileri temizliyoruz. Tekrar tekrar add butonuna basılırsa girdileri tekrar doldurmasın diye. 
    document.getElementById("tbxNumber").value = ""; //Bunu böyle yapmaktansa inputlara value olarak contacstaki değerlerini ver sonra setForm ile boşluk ata
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
            <button onClick={btnAddClearInputs} type="submit" className="btn-lg btn-primary mr-1">
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Index;

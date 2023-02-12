import { useState } from "react";


export const CreateContact = () => {
  //   const handleChange = (event) => {
  //     const name = event.target.name;
  //     const value = event.target.value;
  //     setInputs((values) => ({ ...values, [name]: value }));
  //   };

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  //Want to make it an object - const {name,phoneNumber}=useState({})
  let handleSubmit = (e) => {
    e.preventDefault();
    const contact = { contact: { name, phoneNumber } };
    fetch("http://localhost:5000/contacts/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact),
    }).then(console.log(`Contact Created`))
  
  };
  //Working!!!
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Enter name:
          <input
            type="text"
            required
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Enter phone number:
          <input
            type="text"
            required
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
    </>
  );
};

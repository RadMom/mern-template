import { useState } from "react";

//Must add ADD More options btn. CHeck contactModel from backend folder
//Add search .Must add this in the backend. Use RegEx
//Change req with axios
//Make States object -- const {name,phoneNumber}=useState({})
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
    .catch((err)=>{
      console.log(err);
    })
  
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
        <input type="submit" value={"ADD"} />
      </form>
    </>
  );
};

import { useState } from "react";

//Must add ADD More options btn. CHeck contactModel from backend folder
//Add search .Must add this in the backend. Use RegEx
//Change req with axios
//Make States object -- const {name,phoneNumber}=useState({})
export const CreateContact = ({ createContact }) => {
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
    createContact(contact);
    setName("");
    setPhoneNumber("");
  };
  //Working!!!
  return (
    <div className="create-contact">
      <h3>Create new contact</h3>
      <form onSubmit={handleSubmit}>
        <div className="name-input">
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
        </div>
        <div className="phoneNumber-input">
          <label>
            Enter phone number:
            <input
              type="tel"
              required
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </label>
        <input type="submit" value={"ADD"} />
        </div>
      </form>
    </div>
  );
};

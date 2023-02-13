import { useState, useEffect } from "react";

//Import axios hete. Must move them in separate folder with name features???
import axios from "axios";

import { CreateContact } from "../components/CreateContact";
export const HomePage = () => {
  //State for data from Get All Contacts
  const [data, setData] = useState([]);
  //State to refetch date when add ot delete contact
  const [reFetch, setReFetch] = useState(false);

  //Get All Contact.
  // add try-catch block
  //I want to rerender when add contact
  //Sort newest first. Check backend to do it! DONE!
  useEffect(() => {
    async function fetchingData() {
      const response = await axios.get("http://localhost:5000/contacts");
     setData((oldData)=>response.data)
    }

    fetchingData()
  }, [reFetch]);

  //delete btn function with axios
  //Want the btn to be at  right . Must make it an icon
  const deleteContact = async (id) => {
    const response = await axios.delete("http://localhost:5000/contacts/" + id);
    console.log(response);
    setReFetch((oldState) => !oldState);
    return response;
  };

  return (
    <div className="home-page">
      <h1>homePage</h1>
      <div className="create-contact">
        <CreateContact />
      </div>

      {data.map((el) => (
        <div className="contact-blok" key={el._id}>
          <div className="blok-contact-info">
            <hr />
            <div className="blok-name">Name: {el.contact.name}</div>
            <div className="blok-phoneNumber">
              Phone number: {el.contact.phoneNumber}
            </div>
          </div>
          <div className="btn-delete">
            <button type="submit" onClick={() => deleteContact(el._id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

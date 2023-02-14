import { useState, useEffect } from "react";

//Import axios hete. Must move them in separate folder with name features???
import axios from "axios";

import { CreateContact } from "../components/CreateContact";
import { Dashboard } from "../components/Dashboard";
export const HomePage = () => {
  //State for data from Get All Contacts
  const [data, setData] = useState([]);
  //State to refetch date when add ot delete contact
  const [reFetch, setReFetch] = useState(false);

  //Get All Contact.
  // add try-catch block
  //- DONE!!  I want to rerender when add contact
  //-DONE!  Sort newest first. Check backend to do it!
  useEffect(() => {
    async function fetchingData() {
      const response = await axios.get("http://localhost:5000/contacts");
      setData((oldData) => response.data);
      return response.data;
    }
    fetchingData();
  }, [reFetch]);

  //delete btn function with axios
  //Want the btn to be at  right . Must make it an icon
  const deleteContact = async (id) => {
    const response = await axios.delete("http://localhost:5000/contacts/" + id);
    setReFetch((oldState) => !oldState);
    return response;
  };

  //Create Contact
  const createContact = async (contact) => {
    const response = await axios.post(
      "http://localhost:5000/contacts/",
      contact
    );
    setReFetch((oldState) => !oldState);
    return response;
  };

  return (
    <div className="home-page">
      <h1>homePage</h1>
      <div className="create-contact">
        <CreateContact createContact={createContact} />
      </div>
      {data.length > 0 ? (
        <Dashboard data={data} deleteContact={deleteContact} />
      ) : (
        <h2>loading...</h2>
      )}
    </div>
  );
};

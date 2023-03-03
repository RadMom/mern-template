import { useEffect } from "react";
//Import axios hete. Must move them in separate folder with name features???
import axios from "axios";

import { useContactsContext } from "../hooks/useContactsContext";
import { useAuthContext } from "../hooks/useAuthContext";

import { CreateContact } from "../components/CreateContact";
import { Dashboard } from "../components/Dashboard";

export const HomePage = () => {
  const { contacts, dispatch } = useContactsContext();
  const { user } = useAuthContext();

  useEffect(() => {
    async function fetchingData() {
      const response = await axios.get("http://localhost:5000/api/contacts", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      console.log(response);

      if (response.statusText === "OK") {
        dispatch({ type: "SET_CONTACTS", payload: response.data });
      }
    }
    if (user) {
      fetchingData();
    }
  }, [dispatch, user]);

  console.log(contacts);

  const deleteContact = async (id) => {

    if (!user) {
      return;
    }
    
    const response = await axios.delete(
      "http://localhost:5000/api/contacts/" + id,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    if (response.statusText === "OK") {
      dispatch({ type: "DELETE_CONTACT", payload: response.data });
    }
  };

  //Create Contact
  const createContact = async (contact) => {
    if (!user) {
      return;
    }
    const response = await axios.post(
      "http://localhost:5000/api/contacts/",
      contact,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    if (response.statusText === "OK") {
      dispatch({ type: "CREATE_CONTACT", payload: response.data });
    }
  };

  return (
    <div className="home-page">
      <h1>homePage</h1>
      <div className="create-contact">
        <CreateContact createContact={createContact} />
      </div>
      {contacts ? (
        <Dashboard contacts={contacts} deleteContact={deleteContact} />
      ) : (
        <h1>No Contacts</h1>
      )}
    </div>
  );
};

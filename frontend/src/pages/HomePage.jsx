import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import { CreateContact } from "../components/CreateContact";
export const HomePage = () => {
  const [data, setData] = useState([]);

  // const fetchNames = async () => {
  //   const url = `http://localhost:5000/contacts`;

  //   try {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     console.log(data);
  //     setData(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchNames();
  // }, []);

  useEffect(() => {
    fetch("http://localhost:5000/contacts")
      .then((response) => {
        if (!response.ok) {
          return new Error(`Some ERROR here : ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  //delete btn function
  const deleteContact = async (id) => {
    const response=await axios.delete("http://localhost:5000/contacts/"+id)
    console.log(response);
    return response
  };

  console.log(data);
  return (
    <div className="home-page">
      <h1>homePage</h1>
      <div className="create-contact">
      <CreateContact />
      </div>

      {data.map((el) => (
        <div className="contact-blok">
          <div key={el._id}>
            <hr />
            <p>{el.contact.name}</p>
            <p>{el.contact.phoneNumber}</p>
          </div>
          <button type="submit" onClick={() => deleteContact(el._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import {CreateContact} from "../components/CreateContact"
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


useEffect(()=>{
  fetch("http://localhost:5000/contacts")
  .then((response)=>{
    if(!response.ok){
      return new Error(`Some ERROR here : ${response.status}`)
    }
    return response.json()
  })
  .then((data)=>setData(data))
 .catch(err=>console.log(err))

},[])

  return (
    <div className="home-page">
      <div className="links-home-page">
        <Link to={"/login"}>Login</Link>
        <Link to={"/registration"}>Registration</Link>
      </div>
      <div>homePage</div>
      <CreateContact/>

      {data.map((el) => (
        <div key={el._id}>
          <hr />
          <p>{el.contact.name}</p>
          <p>{el.contact.phoneNumber}</p>
        </div>
        
      ))}
      
    </div>
  );
};

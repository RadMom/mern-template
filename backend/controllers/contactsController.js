const Contact = require("../models/contactModel");

// Get all contacts
const getContacts = (req, res) => {
  Contact.find()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// Create contact
const createContact = (req, res) => {
  console.log(`New contact name :${req.body.contact.name}`);
  const contact = new Contact(req.body);
  contact
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// Get single contact
const getContact = (req, res) => {
  console.log(`This is contact with id: ${req.params.id}`);
  const id = req.params.id;
  Contact.findById(id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// Edit contact Ne Raboti!!!!
const editContact = (req, res) => {
  console.log(`Contact id: ${req.params.id}`);
  const id=req.params.id;
  Contact.findByIdAndUpdate(id,req.body)
  .then(result=>{
    console.log(result,req.body);//result show old info, we pass the new one with req.body.
    //How to pass only the info I want to change???
    res.status(200).json(result);
  })
  .catch((err)=>{
    console.log(err);
  })
};

// Delite contact
const deleteContact = (req, res) => {
  console.log(`This contact with id: ${req.params.id}  will be delited`);
  const id = req.params.id;
  Contact.findByIdAndDelete(id)
  .then((result) => {
    res.status(200).json();
  })
  .catch((err)=>{
    console.log(err);
  })
};

module.exports = {
  getContacts,
  createContact,
  getContact,
  editContact,
  deleteContact,
};
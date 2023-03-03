const Contact = require("../models/contactModel");

// Get all contacts
//Sorted-newest first
const getContacts = async (req, res) => {
  const user_id=req.user._id
  const contacts = await Contact.find({user_id}).sort({ createdAt: -1 });
  res.json(contacts);
};

// Create contact
const createContact = async (req, res) => {
  console.log(`New contact name :${req.body.contact.name}`);
  const user_id = req.user._id;
 
  try {
    const contact = await new Contact({...req.body,user_id});
    contact.save();
    res.json(contact);
  } catch (err) {
    console.log(err);
  }
};

// Get single contact
const getContact = async (req, res) => {
  console.log(`This is contact with id: ${req.params.id}`);
  const id = req.params.id;
  const contact = await Contact.findById(id);
  if (!contact) {
    return res.status(404).json({ error: "Contact doen't exist" });
  }
  res.json(contact);
};

// Edit contact
const editContact = (req, res) => {
  console.log(`Contact id: ${req.params.id}`);
  const id = req.params.id;
  Contact.findByIdAndUpdate(id, req.body)
    .then((result) => {
      console.log(result); //result show old info, we pass the new one with req.body.
      //How to pass only the info I want to change???
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// Delete contact
const deleteContact = async (req, res) => {
  console.log(`This contact with id: ${req.params.id}  will be delited`);
  const id = req.params.id;
  const contact = await Contact.findByIdAndDelete(id);
  res.json(contact);
};

module.exports = {
  getContacts,
  createContact,
  getContact,
  editContact,
  deleteContact,
};

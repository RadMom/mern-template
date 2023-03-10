const express = require("express");
const router = express.Router();

const {
  getContacts,
  createContact,
  getContact,
  editContact,
  deleteContact,
} = require("../controllers/contactsController");

const requireAuth=require("../middleware/requireAuth");

router.use(requireAuth);

router.get("/", getContacts);
router.post("/", createContact);
router.get("/:id", getContact);
router.put("/:id", editContact);
router.delete("/:id", deleteContact);

module.exports = router;

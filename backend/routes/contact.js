const express = require("express");
const router = express.Router();

let contacts = [
  {
    id: 1,
    name: "Ayesha Maxine Shawn",
    email: "yeshamaxine@gmail.com",
    phone: "0912-345-6789",
  },
  {
    id: 2,
    name: "Gojo Saturo",
    email: "saturo@gmail.com",
    phone: "0998-765-4321",
  },
  {
    id: 3,
    name: "Itadori Yuji",
    email: "yuji@gail.com",
    phone: "0910-111-2131",
  },

  {
    id: 3,
    name: "Ichigo Kurosaki",
    email: "ichigo@gmail.com",
    phone: "0911-411-8230",
  },
];

// Get all contacts
router.get("/", (req, res) => res.json(contacts));

// Add a contact
router.post("/", (req, res) => {
  const { name, email, phone } = req.body;
  const newContact = { id: Date.now(), name, email, phone };
  contacts.push(newContact);
  res.status(201).json(newContact);
});

// Delete a contact
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  contacts = contacts.filter((contact) => contact.id !== parseInt(id));
  res.status(200).json({ message: "Contact deleted" });
});

module.exports = router;

const express = require("express");
const router = express.Router();
const Person = require("./../model/personModel");

// GET all persons
router.get("/", async (req, res) => {
  try {
    const persons = await Person.find();
    res.json(persons);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET one person by ID
router.get("/:id", getPerson, (req, res) => {
  res.json(res.person);
});

// POST create a new person
router.post("/", async (req, res) => {
  const person = new Person({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    verified: req.body.verified,
  });
  try {
    const newPerson = await person.save();
    res.status(201).json(newPerson);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT update a person by ID
router.put("/:id", getPerson, async (req, res) => {
  if (req.body.name != null) {
    res.person.name = req.body.name;
  }
  if (req.body.email != null) {
    res.person.email = req.body.email;
  }
  if (req.body.password != null) {
    res.person.password = req.body.password;
  }
  if (req.body.verified != null) {
    res.person.verified = req.body.verified;
  }
  try {
    const updatedPerson = await res.person.save();
    res.json(updatedPerson);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE delete a person by ID
router.delete("/:id", getPerson, async (req, res) => {
  try {
    await res.person.remove();
    res.json({ message: "Person deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get a single person by ID
async function getPerson(req, res, next) {
  let person;
  try {
    person = await Person.findById(req.params.id);
    if (person == null) {
      return res.status(404).json({ message: "Cannot find person" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.person = person;
  next();
}

// POST check if email and password match and ID is verified
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find the person by email
    const person = await Person.findOne({ email });

    // Check if person exists
    if (!person) {
      return res.status(404).json({ message: "Person not found" });
    }

    // Check if password matches
    if (person.password !== password) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Check if person is verified
    if (!person.verified) {
      return res.status(403).json({ message: "Person is not verified" });
    }

    // If all checks pass, return success
    res.status(200).json({ message: "Login successful" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

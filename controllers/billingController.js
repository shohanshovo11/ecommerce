const express = require("express");
const router = express.Router();
const Billing = require("../model/billingModel");

// Get all billings
router.get("/", async (req, res) => {
  try {
    const billings = await Billing.find();
    res.json(billings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single billing
router.get("/:id", getBilling, (req, res) => {
  res.json(res.billing);
});

// Create a billing
router.post("/", async (req, res) => {
  console.log(req.body);
  const billing = new Billing({
    name: req.body.name,
    address: req.body.address,
    city: req.body.city,
    postal: req.body.postal,
    country: req.body.country,
    phone: req.body.phone,
    products: req.body.products,
    total: req.body.total,
  });

  try {
    const newBilling = await billing.save();
    res.status(201).json(newBilling);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a billing
router.put("/:id", getBilling, async (req, res) => {
  if (req.body.name != null) {
    res.billing.name = req.body.name;
  }
  // Update other fields as needed

  try {
    const updatedBilling = await res.billing.save();
    res.json(updatedBilling);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a billing
router.delete("/:id", getBilling, async (req, res) => {
  try {
    await res.billing.remove();
    res.json({ message: "Billing deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getBilling(req, res, next) {
  let billing;
  try {
    billing = await Billing.findById(req.params.id);
    if (billing == null) {
      return res.status(404).json({ message: "Billing not found" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.billing = billing;
  next();
}

module.exports = router;

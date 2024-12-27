const express = require("express");
const { saveForm } = require("../controllers/formController");
const router = express.Router();

router.post("/api/form", saveForm);
router.get("/api/form", (req, res) => {
  res.send("Hello World!");
});

module.exports = router;

const Form = require("../models/form");

const saveForm = async (req, res) => {
  console.log(req.body);
  const { username, password, hello } = req.body;

  const newForm = new Form({ username, password, hello });

  try {
    const savedForm = await newForm.save();
    console.log("Form saved successfully:", savedForm);
    res.status(200).json({ message: "Form saved successfully" });
  } catch (err) {
    console.error("Error saving form:", err);
    res.status(500).json({ error: "Error saving form" });
  }
};

module.exports = { saveForm };

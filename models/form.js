const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  hello: {
    type: String,
    required: false,
  },
});

const Form = mongoose.model("Form", formSchema);

module.exports = Form;

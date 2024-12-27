const User = require("../models/user");

const saveUser = async (req, res) => {
  console.log(req.body);
  const { email, first_name, last_name, telephone } = req.body;

  const newUser = new User({
    email,
    first_name,
    last_name,
    telephone,
    created_at: Date.now(),
    modified_at: Date.now(),
  });

  try {
    const savedUser = await newUser.save();
    console.log("User saved successfully:", savedUser);
    res.status(200).json({ message: "User saved successfully" });
  } catch (err) {
    console.error("Error saving user:", err);
    res.status(500).json({ error: "Error saving user" });
  }
};

// const updateUser = async (req, res) => {
//   const { email } = req.params;
//   const { first_name, last_name, telephone } = req.body;

//   try {
//     const updatedUser = await User.findByIdAndUpdate(
//       email,
//       {
//         first_name,
//         last_name,
//         telephone,
//         modified_at: Date.now(),
//       },
//       { new: true }
//     );

//     if (!updatedUser) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     console.log("User updated successfully:", updatedUser);
//     res
//       .status(200)
//       .json({ message: "User updated successfully", user: updatedUser });
//   } catch (err) {
//     console.error("Error updating user:", err);
//     res.status(500).json({ error: "Error updating user" });
//   }
// };

module.exports = { saveUser };

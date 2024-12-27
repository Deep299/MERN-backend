const express = require("express");
const { saveUser, updateUser } = require("../controllers/userController");
const router = express.Router();

router.post("/api/user", saveUser);
router.post("/api/user/{email}", updateUser);

module.exports = router;

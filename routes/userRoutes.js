const express = require("express");
const {
  getAllUsers,
  createUsers,
  deleUser,
  getUser,
} = require("../controllers/userController");

const router = express.Router();

router.route("/").get(getAllUsers).post(createUsers);
router.route("/:id").get(getUser).patch(updateUser).delete(deleUser);

module.exports = router;

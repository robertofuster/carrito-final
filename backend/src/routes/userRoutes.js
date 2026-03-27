const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");


// PUBLICO
router.post("/register", userController.register);
router.post("/login", userController.login);


// ADMIN
router.get(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  userController.getUsers
);

router.put(
  "/:id/role",
  authMiddleware,
  roleMiddleware("admin"),
  userController.updateRole
);

module.exports = router;
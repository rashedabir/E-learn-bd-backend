const router = require("express").Router();
const authCTRL = require("../../controller/student/authCTRL");
const auth = require("../../middleware/auth");
const authStudent = require("../../middleware/authStudent");

router.post("/register", authCTRL.register);
router.get("/profile", auth, authStudent, authCTRL.getUser);
router.post("/login", authCTRL.login);

router.put(
  "/update_password/:student_id",
  auth,
  authStudent,
  authCTRL.updatePassword
);

router.put(
  "/update_profile/:student_id",
  auth,
  authStudent,
  authCTRL.updateProfile
);

module.exports = router;

const router = require("express").Router();
const authCTRL = require("../../controller/instructor/authCTRL");
const auth = require("../../middleware/auth");
const authInstructor = require("../../middleware/authInstructor");

router.post("/register", authCTRL.register);
router.get("/profile", auth, authCTRL.getUser);
router.post("/login", authCTRL.login);

router.put(
  "/update_password/:instructor_id",
  auth,
  authInstructor,
  authCTRL.updatePassword
);
router.put(
  "/update_profile/:instructor_id",
  auth,
  authInstructor,
  authCTRL.updateProfile
);

module.exports = router;

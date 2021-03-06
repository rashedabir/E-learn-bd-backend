const router = require("express").Router();
const authCTRL = require("../../controller/parent/authCTRL");
const parentCTRL = require("../../controller/parent/parentCTRL");
const auth = require("../../middleware/auth");
const authParent = require("../../middleware/authParent");

router.post("/register", authCTRL.register);
router.get("/profile", auth, authParent, authCTRL.getUser);
router.post("/login", authCTRL.login);

router.put(
  "/update_password/:parent_id",
  auth,
  authParent,
  authCTRL.updatePassword
);
router.put(
  "/update_profile/:parent_id",
  auth,
  authParent,
  authCTRL.updateProfile
);

router.get("/child", auth, authParent, parentCTRL.getChild);
router.get("/child/:student_id", auth, authParent, parentCTRL.getSingleChild);

module.exports = router;

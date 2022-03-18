const router = require("express").Router();
const discussionCTRL = require("../../controller/course/discussionCTRL");
const auth = require("../../middleware/auth");
const authInstructor = require("../../middleware/authInstructor");

router
  .route("/discussion/:course_id")
  .get(auth, discussionCTRL.getDiscussion)
  .post(auth, discussionCTRL.createDiscussion);

router
  .route("/discussion/single/:discussion_id")
  .get(auth, discussionCTRL.getSingleDiscussion)
  .put(auth, discussionCTRL.submitAnswer)
  .delete(auth, authInstructor, discussionCTRL.deleteSingleDiscussion);

module.exports = router;

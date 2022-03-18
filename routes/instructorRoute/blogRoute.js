const router = require("express").Router();
const blogCTRL = require("../../controller/admin/blogCTRL");
const auth = require("../../middleware/auth");
const authInstructor = require("../../middleware/authInstructor");

router
  .route("/instructor/blog")
  .post(auth, authInstructor, blogCTRL.createBlog)
  .get(auth, authInstructor, blogCTRL.instructorBlog);

router
  .route("/instructor/blog/:blog_id")
  .put(auth, authInstructor, blogCTRL.updateBlogs)
  .delete(auth, authInstructor, blogCTRL.deleteBlogs)
  .get(auth, authInstructor, blogCTRL.getSingleBlog);

module.exports = router;

const Course = require("../../model/courseModel");
const Discussion = require("../../model/discussionModel");

const discussionCTRL = {
  getDiscussion: async (req, res) => {
    try {
      const course_id = req.params.course_id;
      const course = await Course.findOne({ _id: course_id });
      if (!course) {
        return res.status(400).json({ msg: "Course not Found." });
      }
      const discussion = await Discussion.find({ course_id });
      res.json({ discussion });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  getSingleDiscussion: async (req, res) => {
    try {
      const discussion_id = req.params.discussion_id;
      const discussion = await Discussion.findOne({ _id: discussion_id });
      if (!discussion) {
        return res.status(400).json({ msg: "Discussion not Found." });
      }
      res.json({ discussion });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  createDiscussion: async (req, res) => {
    try {
      const { question, user } = req.body;
      if (!question || !user) {
        return res.status(400).json({ msg: "Invalid Question." });
      }
      const course_id = req.params.course_id;
      const course = await Course.findOne({ _id: course_id });
      if (!course) {
        return res.status(400).json({ msg: "Course not Found." });
      }
      // const user = req.user;
      const newDiscussion = new Discussion({
        course_id,
        question,
        user,
      });
      // return res.json({ user });
      await newDiscussion.save();
      res.json({ msg: "Created a Discussion." });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  deleteSingleDiscussion: async (req, res) => {
    try {
      const discussion_id = req.params.discussion_id;
      await Discussion.findByIdAndDelete({
        _id: discussion_id,
      });
      res.json({ msg: "Delete Successfully." });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  submitAnswer: async (req, res) => {
    try {
      const { answer, user } = req.body;
      if (!answer || !user) {
        return res.status(400).json({ msg: "Invalid Answer." });
      }

      const discussion = await Discussion.findOne({
        _id: req.params.discussion_id,
      });

      discussion.submissions.push({
        answer,
        user,
      });

      discussion.save();
      res.json({ msg: "Successfully Submitted." });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

module.exports = discussionCTRL;

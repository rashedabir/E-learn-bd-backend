const mongoose = require("mongoose");

const answerSchema = mongoose.Schema(
  {
    answer: {
      type: String,
      required: true,
    },
    user: {
      type: Object,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const discussionSchema = mongoose.Schema(
  {
    course_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "course",
    },
    question: {
      type: String,
      required: true,
    },
    user: {
      type: Object,
      required: true,
    },
    submissions: [answerSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Discussionn", discussionSchema);

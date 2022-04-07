import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    tuit: String,
    liked: Boolean,
    disliked: Boolean,
    time: String,
    postedBy: {
      username: String,
    },
    stats: {
      comments: Number,
      retuits: Number,
      likes: Number,
      dislikes: Number,
    },
    handle: String,
  },
  { collection: "tuits" }
);

export default schema;

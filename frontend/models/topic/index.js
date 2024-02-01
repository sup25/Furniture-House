import mongoose, { Schema } from "mongoose";

let Topic;

try {
  Topic = mongoose.model("Topic");
} catch (e) {
  Topic = mongoose.model(
    "Topic",
    new Schema(
      {
        title: String,
        description: String,
      },
      { timestamps: true }
    )
  );
}

export default Topic;

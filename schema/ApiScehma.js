import mongoose from "mongoose";

const ApiSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      unquie: true,
      required: true,
    },
    data: mongoose.Schema.Types.Mixed,
  },
  {
    timestamps: true,
  }
);

export const Usermodel = mongoose.model("userjson", ApiSchema);

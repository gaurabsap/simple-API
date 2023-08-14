import mongoose from "mongoose";

const ConnectDb = async () => {
  try {
    const resq = await mongoose.connect(process.env.MONGODB_URL);
    console.log("dB CONNECTED");
  } catch (error) {
    console.log(error);
  }
};
export default ConnectDb;

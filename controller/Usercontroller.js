import { Usermodel } from "../schema/ApiScehma.js";

export const createJson = async (resq, resp) => {
  const { user } = resq.params;
  const Jsondata = resq.body;
  if (!user) {
    return resp.status(400).json({
      message: "Username is required",
    });
  }
  if (!Jsondata) {
    return resp.status(400).json({
      message: "data is required",
    });
  }
  if (typeof Jsondata !== "object") {
    return resp.status(400).json({
      message: "data should be on json",
    });
  }
  try {
    const createdata = await Usermodel.create({ user: user, data: Jsondata });
    return resp.status(201).json({
      message: "Your api created",
    });
  } catch (error) {
    return resp.status(500).json({
      message: "Server error",
    });
  }
};

export const getJsonData = async (resq, resp) => {
  const { user } = resq.query;
  console.log(user);
  if (!user) {
    return resp.status(400).json({
      message: "User is required",
    });
  }
  try {
    console.log("hit");
    const find = await Usermodel.findOne({ user });
    if (!find) {
      return resp.status(400).json({
        message: "User not found",
      });
    }
    return resp.status(200).json({
      data: find.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

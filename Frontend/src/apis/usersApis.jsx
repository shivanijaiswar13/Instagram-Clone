import { axiosInstance } from "../config/axiosInstance";

export const getAllUsers = async (req, res) => {
  try {
    let res = await axiosInstance.get("/users");

    if (res) {
      console.log("hello", res);
      return res.data;
    }
  } catch (error) {
    console.log("error in all users", error);
  }
};
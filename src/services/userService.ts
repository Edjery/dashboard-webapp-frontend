import axios from "axios";
import popUpError from "../helpers/popUpError";
import ILoginValues from "../pages/auth/interface/ILoginValues";
import IAccountValues from "../pages/auth/interface/IRegisterValues";
import axiosInstance from "./apiClient";
import IUser from "./interface/IUser";

const API_ENDPOINT = "users/";

class UserService {
  constructor() {}

  async register(newUser: IAccountValues) {
    try {
      const response = await axiosInstance.post(API_ENDPOINT, newUser, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.data) {
          for (const key in error.response.data) {
            if (error.response.data.hasOwnProperty(key)) {
              const errorMessage = `${key
                .toString()
                .toUpperCase()}: ${error.response.data[key].toString()}`;
              popUpError(errorMessage);
            }
          }
        } else {
          console.error("Error:", error.message);
        }
      } else {
        console.error("Error in updating data:", error);
        throw error;
      }
    }
  }

  async login(user: ILoginValues) {
    try {
      const response = await axiosInstance.post("login/", user);
      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.data) {
          for (const key in error.response.data) {
            if (error.response.data.hasOwnProperty(key)) {
              const errorMessage = `${key
                .toString()
                .toUpperCase()}: ${error.response.data[key].toString()}`;
              popUpError(errorMessage);
            }
          }
        } else {
          console.error("Error:", error.message);
        }
      } else {
        console.error("Error in updating data:", error);
        throw error;
      }
    }
  }

  async get(id: number | undefined): Promise<IUser> {
    const response = await axiosInstance.get(`${API_ENDPOINT}${id}/`);
    const data: IUser = response.data;
    return data;
  }
}

const userService = new UserService();
export default userService;

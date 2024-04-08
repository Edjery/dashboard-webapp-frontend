import axios from "axios";
import popUpError from "../helpers/popUpError";
import ILoginValues from "../pages/auth/interface/ILoginValues";
import IAccountValues from "../pages/auth/interface/IRegisterValues";
import axiosInstance from "./apiClient";
import IUser from "./interface/IUser";

const USER_API_ENDPOINT = "users/";
const LOGIN_API_ENDPOINT = "login/";
const AUTH_USER_API_ENDPOINT = "auth/authenticate_user/";
const AUTH_STATUS_API_ENDPOINT = "authenticated_users/";
const AUTH_ID_ENDPOINT = "auth_user/";

class UserService {
  constructor() {}

  async register(newUser: IAccountValues) {
    try {
      const response = await axiosInstance.post(USER_API_ENDPOINT, newUser, {
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
          popUpError("Error:" + error.message);
        }
      } else {
        console.error("Error in updating data:", error);
        popUpError("Error in updating data:" + error);
        throw error;
      }
    }
  }

  async login(user: ILoginValues) {
    try {
      const response = await axiosInstance.post(LOGIN_API_ENDPOINT, user);
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
          popUpError("Error:" + error.message);
        }
      } else {
        console.error("Error in updating data:", error);
        popUpError("Error in updating data:" + error);
        throw error;
      }
    }
  }

  async authenticate(token: string) {
    try {
      const response = await axiosInstance.post(AUTH_USER_API_ENDPOINT, {
        token: token,
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

  async get(id: number | undefined): Promise<IUser> {
    const response = await axiosInstance.get(`${USER_API_ENDPOINT}${id}/`);
    const data: IUser = response.data;
    return data;
  }

  async updateAuthStatus(id: number | undefined) {
    try {
      const responseFindUser = await axiosInstance.get(
        `${AUTH_ID_ENDPOINT}${id}/`
      );

      const authId = responseFindUser.data.user_id;

      const response = await axiosInstance.patch(
        `${AUTH_STATUS_API_ENDPOINT}${authId}/`,
        {
          status: !responseFindUser.data.status,
        }
      );
      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 404) {
          const response = await axiosInstance.post(AUTH_STATUS_API_ENDPOINT, {
            user: id,
            status: true,
          });
          return response;
        }
      }
    }
  }

  async getAuthStatus(id: number | undefined) {
    const responseFindUser = await axiosInstance.get(
      `${AUTH_ID_ENDPOINT}${id}/`
    );

    const authId = responseFindUser.data.user_id;

    const response = await axiosInstance.get(
      `${AUTH_STATUS_API_ENDPOINT}${authId}/`
    );
    const data: boolean = response.data.status;
    return data;
  }
}
const userService = new UserService();
export default userService;

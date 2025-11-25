import { httpClient } from "../../../lib/axios";
import { userStorage } from "../../log-in/storage";

class AuthServices {
  #endPoint = "/auth";

  async register(payload) {
    const formData = new FormData();

    Object.keys(payload).forEach((key) => {
      formData.append(key, payload[key]);
    });

    const response = await httpClient.post(
      `${this.#endPoint}/register`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  }

  async login(payload) {
    const response = await httpClient.post(`${this.#endPoint}/login`, payload);

    const token = response.data?.data?.access_token;

    if (!token) {
      throw new Error("Invalid login response: missing token");
    }

    // Save token
    userStorage.set(token);

    // You DO get customer data from login
    return {
      token,
      customer: response.data.data.customer,
      is_verified: response.data.data.is_verified,
    };
  }
}

export default new AuthServices();

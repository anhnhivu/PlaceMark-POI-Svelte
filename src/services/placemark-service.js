import axios from "axios";
import { user } from "../stores.js";

export class PlacemarkService {
  baseUrl = "";

  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    const placemarkCredentials = localStorage.placemark
    if (placemarkCredentials) {
      const savedUser = JSON.parse(placemarkCredentials)
      user.set({
        email: savedUser.email,
        token: savedUser.token,
        isAdmin: savedUser.isAdmin,
      });
      axios.defaults.headers.common["Authorization"] = "Bearer " + savedUser.token;
    }
  }

  async login(email, password) {
    try {
      const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, {email, password});
      axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
      console.log(response);
      if (response.data.success) {
        user.set({
          email: email,
          token: response.data.token,
          isAdmin: response.data.isAdmin,
        });
        localStorage.placemark = JSON.stringify({email:email, token:response.data.token, isAdmin: response.data.isAdmin});
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }

  async logout() {
    user.set({
      email: "",
      token: "",
      isAdmin: false,
    });
    axios.defaults.headers.common["Authorization"] = "";
    localStorage.removeItem("placemark");
  }

  async signup(firstName, lastName, email, password) {
    try {
      const userDetails = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      };
      await axios.post(this.baseUrl + "/api/users", userDetails);
      return true;
    } catch (error) {
      return false;
    }
  }

  async addPoint(point) {
    try {
      const response = await axios.post(this.baseUrl + "/api/categories/" + point.category + "/points", point);
      return response.status == 200;
    } catch (error) {
      return false;
    }
  }

  async getCategories() {
    try {
      const response = await axios.get(this.baseUrl + "/api/categories");
      return response.data
    } catch (error) {
      return [];
    }
  }

  async getPoints() {
    try {
      const response = await axios.get(this.baseUrl + "/api/points");
      return response.data;
    } catch (error) {
      return [];
    }
  }

  async getAllUsers() {
    try {
      const response = await axios.get(this.baseUrl + "/api/users");
      return response.data;
    } catch (error) {
      return [];
    }
  }
}
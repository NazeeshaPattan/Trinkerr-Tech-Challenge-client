import axios from "axios";
import config from "../constants/config.json";
import constants from "../constants/index";

const api = (method, endpoint, data, token = null) => {
  if (token) {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
  }
  return axios({
    method: method,
    url: `${config.ROOT_URL}${endpoint}`,
    data: data,
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const sendOtp = (data) => {
  return api("post", constants.API.SIGNUP, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};

export const verifyOtp = (data) => {
  return api("post", constants.API.SIGNIN, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};

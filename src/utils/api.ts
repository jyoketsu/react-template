import axios from "axios";
const AUTH_URL = import.meta.env.VITE_AUTH_URL;
const API_URL = import.meta.env.VITE_API_URL;
let token = localStorage.getItem("auth_token") || "";

const request = {
  get(path: string, params?: object) {
    return new Promise(async function (resolve, reject) {
      try {
        const response = await axios({
          method: "get",
          url: path,
          params: params,
          headers: {
            token: token,
          },
        });
        resolve(response.data);
      } catch (error) {
        reject(error);
      }
    });
  },
  post(path: string, params?: object) {
    return new Promise(async function (resolve, reject) {
      try {
        const response = await axios({
          method: "post",
          url: path,
          data: params,
          headers: {
            token: token,
          },
        });
        resolve(response.data);
      } catch (error) {
        reject(error);
      }
    });
  },
  patch(path: string, params: object) {
    return new Promise(async function (resolve, reject) {
      try {
        const response = await axios({
          method: "patch",
          url: path,
          data: params,
          headers: {
            token: token,
          },
        });
        resolve(response.data);
      } catch (error) {
        reject(error);
      }
    });
  },
  delete(path: string, params: object) {
    return new Promise(async function (resolve, reject) {
      try {
        const response = await axios({
          method: "delete",
          url: path,
          data: params,
          headers: {
            token: token,
          },
        });
        resolve(response.data);
      } catch (error) {
        reject(error);
      }
    });
  },
};

const auth = {
  loginByToken(token: string) {
    return request.get(AUTH_URL + "/account/userinfo", { token: token });
  },
  // 获取七牛云uptoken
  getUptoken() {
    return request.get(AUTH_URL + "/upTokenQiniu/getQiNiuUpToken", {
      token: token,
      type: 2,
      bucketType: 7,
    });
  },
  getUptokenOverWrite(key: string) {
    return request.get(AUTH_URL + "/upTokenQiniu/getQiNiuUpTokenKey", {
      token: token,
      type: 2,
      key,
      bucketType: 7,
    });
  },
  // 同步用户
  syncUser(props: {
    userKey: string;
    userName: string;
    mobile: string;
    app: number;
    appHigh: number;
    userAvatar?: string;
    email?: string;
  }) {
    return request.patch(API_URL + "/user", props);
  },
  // 历史协作者
  getCollaboratorsHistory() {
    return request.get(API_URL + "/user/history");
  },
};

export default {
  auth,
  setToken: (_token: string) => {
    localStorage.setItem("auth_token", _token);
    token = _token;
  },
};

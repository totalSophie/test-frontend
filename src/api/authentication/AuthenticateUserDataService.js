import axios from "axios";

const AuthenticateUserDataService = (username, password) => {
  return axios
    .post(`${process.env.REACT_APP_BASE_URL}`, {
      username,
      password,
    })
    .then((res) => {
      if (res != null) {
        console.log(res);
        return res;
      }
    })
    .catch((err) => {
      let error = "";

      if (err.response) {
        error += err.response;
      }
      return error;
    });
};

export default AuthenticateUserDataService;

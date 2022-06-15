import axios from "axios";

const request = axios.create({
  baseURL: "https://6290e41b665ea71fe13d1c31.mockapi.io/api/v1",
});

export default request;

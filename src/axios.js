import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://bookstore-challenge-node.herokuapp.com/",
});

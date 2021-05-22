import axios from "axios";

const instance = axios.create({
  baseURL: "https://db-burger-builder-ebf95-default-rtdb.firebaseio.com/",
});

export default instance;

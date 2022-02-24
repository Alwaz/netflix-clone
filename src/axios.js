import axios from "axios";

// base url to send reques to database and whenever this instance is called it will append the value to url.
const instance = axios.create({
  baseURL: `https://api.themoviedb.org/3`,
});

export default instance;

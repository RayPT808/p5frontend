import axios from "axios";

axios.defaults.baseURL = "https://p5backend-9681141c47d0.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;
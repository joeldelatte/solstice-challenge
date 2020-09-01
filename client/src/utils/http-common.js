import axios from "axios";

export default axios.create({
  baseURL: "https://solstice-challenge-joeldelatte.herokuapp.com/",
  headers: {
    "Content-type": "application/json",
  },
});

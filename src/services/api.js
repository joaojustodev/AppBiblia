import axios from "axios";

const bible = axios.create({
  baseURL: "https://www.abibliadigital.com.br/api/verses",
});

export default bible;

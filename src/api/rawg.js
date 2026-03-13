import axios from "axios";

const API_KEY = "796204d9988b4130a7fc4db2243d066d";

export const api = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: API_KEY
    }
});
import axios from "axios";

const dFetch = axios.create({
    //url base sem o /endpoint
    baseURL: "https://dhodonto.ctdprojetos.com.br",
    headers: {
        "Content-Type": "application/json",
    },
});

export default dFetch;
